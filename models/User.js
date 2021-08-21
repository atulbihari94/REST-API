const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('productUser', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    emnai: Sequelize.STRING,
});

module.exports = User;