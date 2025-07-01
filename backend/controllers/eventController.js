const Event = require('../models/eventModel');

// @desc    Fetch initial event (Day 1)
// @route   GET /api/events/initial
// @access  Public
const getInitialEvent = async (req, res) => {
  const event = await Event.findOne({ eventId: 1 });
  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ message: 'Initial event not found' });
  }
};

// @desc    Fetch a random daily event, excluding used ones
// @route   POST /api/events/daily
// @access  Public
const getDailyEvent = async (req, res) => {
  // Ambil array ID yang sudah digunakan dari body request
    const { excludedIds = [] } = req.body;

    try {
        const events = await Event.aggregate([
        {
            // Cari event harian (ID 5-27) yang ID-nya TIDAK ADA ($nin) di dalam array excludedIds
            $match: {
                eventId: { $gte: 5, $lte: 27, $nin: excludedIds }
            }
        },
        // Ambil 1 sampel acak dari hasil pencarian
        { $sample: { size: 1 } },
    ]);

        if (events.length > 0) {
            res.json(events[0]);
        } else {
        // Ini terjadi jika semua event harian sudah digunakan
            res.status(404).json({ message: 'No more daily events available' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error fetching daily event' });
    }
};

// @desc    Fetch a specific weekly event by ID
// @route   GET /api/events/weekly/:id
// @access  Public
const getWeeklyEvent = async (req, res) => {
    const event = await Event.findOne({ eventId: req.params.id });
    if (event) {
        res.json(event);
    } else {
        res.status(404).json({ message: 'Weekly event not found' });
    }
};

module.exports = { getInitialEvent, getDailyEvent, getWeeklyEvent };
