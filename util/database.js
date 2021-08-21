const Sequelize = require('sequelize');

const sequelize = new Sequelize('wfabric', 'root', 'atul', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
