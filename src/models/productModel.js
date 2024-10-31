const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },


},
    {
        timestamps: false
    }
)

module.exports = Product;