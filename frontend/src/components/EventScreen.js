import React, { useState } from 'react';

const EventScreen = ({ event, onChoice, onChoiceMouseEnter, onChoiceMouseLeave }) => {
    if (!event) {
        return <div>Loading event...</div>;
    }

    const lanjutChoicePreview = { // minggu tenang
        cash: 0,
        savings: 0,
        bills: 0,
        happiness: 5,
        health: 0,
    };

    return (
        <div className="event-screen">
            <h2>{event.naration_name}</h2>
            <p className="naration-dialogue">{event.naration_dialogue}</p>
            <div className="choices-container">
                {event.choices && event.choices.length > 0 ? (
                event.choices.map((choice, index) => (
                    <button
                        key={index}
                        className="choice-button"
                        onClick={() => onChoice(choice)}
                        onMouseEnter={() => onChoiceMouseEnter(choice)}
                        onMouseLeave={onChoiceMouseLeave}
                    >
                        {choice.text}
                    </button>
                ))
            ) : (
                <button 
                    className="choice-button" 
                    onClick={() => onChoice({})} 
                    onMouseEnter={() => onChoiceMouseEnter(lanjutChoicePreview)}
                    onMouseLeave={onChoiceMouseLeave}
                >
                    Lanjut
                </button>
            )}
            </div>
        </div>
    );
};

export default EventScreen;