const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;
const PYTHON_BACKEND_URL = 'http://localhost:5000';

app.use(cors());
app.use(express.static(path.join(__dirname, '.')));

// API Route that proxies to the Python Backend
app.get('/api/status', async (req, res) => {
    try {
        const response = await axios.get(`${PYTHON_BACKEND_URL}/api/data`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching from Python backend:', error.message);
        res.status(500).json({
            error: 'Failed to fetch data from Python backend'
        });
    }
});

// Get Events from Backend
app.get('/events', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:5000/events');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching events:', error.message);
        res.status(500).json({
            error: 'Failed to fetch events'
        });
    }
});

// Serve the index.html for root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Node.js Express Server running on http://localhost:${PORT}`);
});