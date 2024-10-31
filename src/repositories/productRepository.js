const Product = require('../models/productModel');

const findAll = async () => {
    return await Product.findAll();
}

module.exports = { 
    findAll,
};