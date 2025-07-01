import React from 'react';
import IntroScreen from './IntroScreen';
import EventScreen from './EventScreen';
import EndScreen from './EndScreen';

const MainBox = ({ gameState, onStartGame, onChoice }) => {
    return (
        <div className="main-box">
            {gameState.screen === 'intro' && (
                <IntroScreen onStartGame={onStartGame} />
            )}
            {gameState.screen === 'game' && (
                <EventScreen event={gameState.currentEvent} onChoice={onChoice} />
            )}
            {/* Gunakan komponen EndScreen dan kirim pesan akhir dari state */}
            {gameState.screen === 'end' && (
                <EndScreen message={gameState.endGameMessage} />
            )}
        </div>
    );
};

export default MainBox;
