const { Sequelize } = require('sequelize');

// SQLite DB setup
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/finance.db',
});

module.exports = sequelize;
