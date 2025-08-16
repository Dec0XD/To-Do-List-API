require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
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
const PORT = process.env.PORT || 3000;

sequelize.authenticate()
    .then(() => {
        console.log('SQLite database connected successfully');
        return sequelize.sync({ force: false }); // Create tables if they don't exist
    })
    .then(() => {
        console.log('Database synchronized');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Database connection error:', err);
        process.exit(1);
    });