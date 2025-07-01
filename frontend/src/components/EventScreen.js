import React from 'react';

const EventScreen = ({ event, onChoice }) => {
    if (!event) {
        return <div>Loading event...</div>;
    }

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
                    >
                    {choice.text}
                </button>
            ))
            ) : (
            <button className="choice-button" onClick={() => onChoice({})}>
                Lanjut
            </button>
            )}
        </div>
        </div>
    );
};

export default EventScreen;