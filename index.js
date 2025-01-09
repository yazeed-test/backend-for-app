const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index');
require('dotenv').config(); 
const cors = require('cors');


const app = express();
app.use(cors()); 

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Use routes
app.use('/api', routes);

// Default route for unmatched endpoints
app.use((req, res) => {
    res.status(404).send('Endpoint not found');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
