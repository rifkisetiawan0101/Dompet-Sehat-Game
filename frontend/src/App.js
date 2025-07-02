import React, { useState, useCallback } from 'react';
import axios from 'axios';
import GameContainer from './components/GameContainer';
import Footer from './components/Footer';
import './App.css';

import { 
  startMusic, 
  stopMusic, 
  playClickSfx, 
  playHoverSfx, 
  playEndingSfx
} from './AudioManager';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/events';

// Helper function to determine the end game route
const determineEndGame = (stats) => {
  const { cash, savings, bills, happiness, health } = stats;
  const totalAssets = cash + savings;

  // Abnormal Endings (Highest Priority)
  if (happiness <= 0) 
    return { emoji: '💔', text: 'Rute Gangguan Mental: Kamu tidak bisa melanjutkan karena kebahagiaanmu habis.', sfxKey: 'mental' };
  if (health <= 0) 
    return { emoji: '💀', text: 'Rute Kematian: Kamu tidak bisa melanjutkan karena kesehatanmu habis.', sfxKey: 'death' };

  // Normal Endings (Priority Order)
  if (bills > 0) 
    return { emoji: '🧾', text: 'Rute Nunggak Tagihan: Kamu berhasil bertahan, tapi masih ada tagihan yang belum lunas.', sfxKey: 'bills' };
  if (totalAssets <= 0) 
    return { emoji: '💸', text: 'Rute Kehabisan Uang: Kamu berhasil bertahan, tapi dompetmu kosong melompong.', sfxKey: 'broke' };
  
  // Success Routes
  if (totalAssets >= 1000000 && bills <= 0 && happiness >= 50 && health >= 50) 
    return { emoji: '🏆', text: 'Rute Sempurna: Selamat! Kamu mengelola keuangan dengan sangat baik dan hidup seimbang.', sfxKey: 'perfect' };
  if (totalAssets > 0 && bills <= 0 && happiness <= 50 && health <= 50) 
    return { emoji: '😫', text: 'Rute Berhasil tapi Stres & Sakit: Kamu punya uang, tapi mengorbankan kebahagiaan dan kesehatanmu.', sfxKey: 'stress_sick' };
  if (totalAssets > 0 && bills <= 0 && happiness <= 50) 
    return { emoji: '😟', text: 'Rute Berhasil tapi Stres: Kamu punya uang, tapi hidupmu terasa hampa dan tidak bahagia.', sfxKey: 'stress' };
  if (totalAssets > 0 && bills <= 0 && health <= 50) 
    return { emoji: '🤕', text: 'Rute Berhasil tapi Sakit: Kamu punya uang, tapi sering sakit-sakitan karena pola hidup yang buruk.', sfxKey: 'sick' };
  
  // Default Success Route
  if (totalAssets > 0 && bills <= 0) 
    return { emoji: '👍', text: 'Rute Berhasil: Kamu berhasil menyelesaikan bulan ini dengan keuangan yang positif. Kerja bagus!', sfxKey: 'success' };

  // Default Failure Route
  return { emoji: '👎', text: 'Rute Kegagalan: Kamu tidak berhasil mengelola keuanganmu bulan ini. Coba lagi!', sfxKey: 'failure' };
};


function App() {
  const [gameState, setGameState] = useState({
    screen: 'intro',
    stats: { day: 0, cash: 0, savings: 0, bills: 0, happiness: 100, health: 100 },
    currentEvent: null,
    unpaidBillEvents: [2, 3, 4],
    usedDailyEvents: [], // State untuk menyimpan ID event harian yang sudah digunakan
    endGameMessage: { emoji: '', text: '' },
    hoveredChoice: null,
  });

  const fetchNextEvent = useCallback(async (day) => {
    if (day > 28) return;

    try {
      let response;
      if (day === 1) {
        response = await axios.get(`${API_URL}/initial`);
      } else if (day === 8 || day === 15 || day === 22) {
        if (gameState.unpaidBillEvents.length > 0) {
          const nextBillEventId = gameState.unpaidBillEvents[0];
          response = await axios.get(`${API_URL}/weekly/${nextBillEventId}`);
        } else {
          response = await axios.get(`${API_URL}/weekly/28`);
        }
      } else {
        // Kirim request POST dengan daftar event yang sudah digunakan
        response = await axios.post(`${API_URL}/daily`, { 
          excludedIds: gameState.usedDailyEvents 
        });
      }
      setGameState(prev => ({ ...prev, currentEvent: response.data }));
    } catch (error) {
      console.error("Failed to fetch event:", error);
    }
  }, [gameState.unpaidBillEvents, gameState.usedDailyEvents]);

  const startGame = () => {
    playClickSfx();
    startMusic();

    setGameState({
      screen: 'game',
      stats: { day: 1, cash: 3000000, savings: 0, bills: 1100000, happiness: 100, health: 100 },
      currentEvent: null,
      unpaidBillEvents: [2, 3, 4],
      usedDailyEvents: [], // Reset daftar saat game baru dimulai
      endGameMessage: { emoji: '', text: '' },
    });
    fetchNextEvent(1);
  };

  const handleChoiceMouseEnter = (choice) => {
    playHoverSfx();
    setGameState(prev => ({ ...prev, hoveredChoice: choice }));
  };

  const handleChoiceMouseLeave = () => {
    setGameState(prev => ({ ...prev, hoveredChoice: null }));
  };

  const handleChoice = (choice) => {
    playClickSfx();
    const currentEventId = gameState.currentEvent.eventId;
    
    const newStats = {
      ...gameState.stats,
      day: gameState.stats.day + 1,
      cash: gameState.stats.cash + (choice.cash || 0),
      savings: gameState.stats.savings + (choice.savings || 0),
      bills: gameState.stats.bills + (choice.bills || 0),
      happiness: Math.max(0, Math.min(100, gameState.stats.happiness + (choice.happiness || 0))),
      health: Math.max(0, Math.min(100, gameState.stats.health + (choice.health || 0))),
    };

    // happiness +5 jika eventnya adalah "Minggu Tenang" (ID 28)
    if (currentEventId === 28) {
      newStats.happiness = Math.min(100, newStats.happiness + 5);
    }

    let nextUnpaidBillEvents = [...gameState.unpaidBillEvents];
    if (choice.bills && choice.bills < 0) {
      if (currentEventId === 1) {
        nextUnpaidBillEvents = [];
      } else {
        nextUnpaidBillEvents = nextUnpaidBillEvents.filter(id => id !== currentEventId);
      }
    }
    
    // Tambahkan event harian ke daftar yang sudah digunakan
    let nextUsedDailyEvents = [...gameState.usedDailyEvents];
    if (currentEventId >= 5 && currentEventId <= 27) {
      nextUsedDailyEvents.push(currentEventId);
    }

    // Check for game over conditions
    if (newStats.day > 28 || newStats.health <= 0 || newStats.happiness <= 0) {
      stopMusic();
      const endMessage = determineEndGame(newStats);
      
      playEndingSfx(endMessage.sfxKey);

      setGameState(prev => ({
        ...prev,
        screen: 'end',
        stats: newStats,
        endGameMessage: endMessage,
        hoveredChoice: null
      }));
    } else {
      setGameState(prev => ({
        ...prev,
        stats: newStats,
        unpaidBillEvents: nextUnpaidBillEvents,
        usedDailyEvents: nextUsedDailyEvents,
        hoveredChoice: null
      }));
      fetchNextEvent(newStats.day);
    }
  };

  return (
    <div className="App">
      <GameContainer
        gameState={gameState}
        onStartGame={startGame}
        onChoice={handleChoice}
        onChoiceMouseEnter={handleChoiceMouseEnter}
        onChoiceMouseLeave={handleChoiceMouseLeave}
      />
      <Footer />
    </div>
  );
}

export default App;