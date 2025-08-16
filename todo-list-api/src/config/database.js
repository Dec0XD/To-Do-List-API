const { Sequelize } = require('sequelize');
const path = require('path');

// SQLite database configuration
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '..', '..', 'database.sqlite'),
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
});

module.exports = sequelize;
