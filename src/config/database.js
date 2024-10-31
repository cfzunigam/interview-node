const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test-connection', 'usuario', 'contraseña', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
