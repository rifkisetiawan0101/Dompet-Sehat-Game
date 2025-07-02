import React from 'react';
import IntroScreen from './IntroScreen';
import EventScreen from './EventScreen';
import EndScreen from './EndScreen';

const MainBox = ({ gameState, onStartGame, onChoice, onChoiceMouseEnter, onChoiceMouseLeave, onRestartClick }) => {
    if (!gameState) {
        return null;
    }

    return (
        <div className="main-box">
            {gameState.screen === 'intro' && (
                <IntroScreen 
                    onStartGame={onStartGame}
                    onChoiceMouseEnter={onChoiceMouseEnter}
                    onChoiceMouseLeave={onChoiceMouseLeave}
                />
            )}
            {gameState.screen === 'game' && (
                <EventScreen
                    event={gameState.currentEvent}
                    onChoice={onChoice}
                    onChoiceMouseEnter={onChoiceMouseEnter}
                    onChoiceMouseLeave={onChoiceMouseLeave}
                />
            )}
            {gameState.screen === 'end' && (
                <EndScreen 
                    message={gameState.endGameMessage}
                    onRestartClick={onRestartClick} 
                    onChoiceMouseEnter={onChoiceMouseEnter}
                    onChoiceMouseLeave={onChoiceMouseLeave}
                />
            )}
        </div>
    );
};

export default MainBox;