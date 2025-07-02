import React from 'react';

import { 
    playClickSfx,
} from '../AudioManager';

const EndScreen = ({ message, onChoiceMouseEnter }) => {
    // Fungsi untuk me-reload halaman dan memulai game baru
    const restartGame = () => {
        playClickSfx();
        window.location.reload();
    };

    return (
        <div className="intro-screen">
            <h1>Game Selesai!</h1>
            {/* Tampilkan emoji dan pesan dari state */}
            <p style={{ fontSize: '48px', margin: '2rem 0' }}>{message.emoji}</p>
            <p>{message.text}</p>
            <button 
                className="start-button" 
                onClick={restartGame} 
                onMouseEnter={onChoiceMouseEnter}
            >
                Main Lagi
            </button>
        </div>
    );
};

export default EndScreen;
