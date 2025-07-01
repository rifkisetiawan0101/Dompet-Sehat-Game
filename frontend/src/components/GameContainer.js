import React from 'react';
import MainBox from './MainBox';
import StatusBar from './StatusBar';

const GameContainer = ({ gameState, onStartGame, onChoice }) => {
    return (
        <div className="game-container">
        <MainBox
            gameState={gameState}
            onStartGame={onStartGame}
            onChoice={onChoice}
        />
        <StatusBar stats={gameState.stats} />
        </div>
    );
};

export default GameContainer;