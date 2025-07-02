import React from 'react';
import MainBox from './MainBox';
import StatusBar from './StatusBar';

const GameContainer = ({ gameState, onStartGame, onChoice, onChoiceMouseEnter, onChoiceMouseLeave }) => {
    if (!gameState) {
        return <div>Loading...</div>;
    }

    return (
        <div className="game-container">
            <MainBox
                gameState={gameState}
                onStartGame={onStartGame}
                onChoice={onChoice}
                onChoiceMouseEnter={onChoiceMouseEnter}
                onChoiceMouseLeave={onChoiceMouseLeave}
            />
            <StatusBar 
                stats={gameState.stats}
                hoveredChoice={gameState.hoveredChoice}
            />
        </div>
    );
};

export default GameContainer;