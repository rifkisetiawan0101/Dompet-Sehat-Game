const mongoose = require('mongoose');

const choiceSchema = mongoose.Schema({
    text: { type: String, required: true },
    cash: { type: Number, required: true, default: 0 },
    savings: { type: Number, required: true, default: 0 },
    bills: { type: Number, required: true, default: 0 },
    happiness: { type: Number, required: true, default: 0 },
    health: { type: Number, required: true, default: 0 },
});

const eventSchema = mongoose.Schema({
    eventId: { type: Number, required: true, unique: true, },
    naration_name: { type: String, required: true, },
    naration_dialogue: { type: String, required: true, },
    choices: [choiceSchema],
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;