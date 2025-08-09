require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const taskRoutes = require('./routes/taskRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes (API first)
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Static frontend last
app.use(express.static(path.join(__dirname, '..', 'public')));

// Database connection and server start
const mongoUri = process.env.MONGODB_URI || process.env.DATABASE_URL;
const PORT = process.env.PORT || 3000;

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });