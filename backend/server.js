const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const eventRoutes = require('./routes/eventRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors()); // Mengizinkan request dari frontend
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/events', eventRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);