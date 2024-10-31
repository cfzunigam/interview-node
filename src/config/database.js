const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('products', 'root', 'Password1!', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
