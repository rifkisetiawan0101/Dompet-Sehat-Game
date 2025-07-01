const express = require('express');
const router = express.Router();
const {
    getInitialEvent,
    getDailyEvent,
    getWeeklyEvent,
} = require('../controllers/eventController');

router.get('/initial', getInitialEvent);
router.post('/daily', getDailyEvent);
router.get('/weekly/:id', getWeeklyEvent);

module.exports = router;