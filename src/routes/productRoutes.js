const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.get('/products', productController.getAllProductsController);

module.exports = router;