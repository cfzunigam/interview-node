const productService = require ('../services/productService');

const getAllProductsController = async (req, res, next) => {
    try {
        const products = await productService.getAllProducts();
        console.log("is ok: ", products);
        res.send(products);
    } catch(error){
        console.log(error);
    }
}

module.exports = {
    getAllProductsController,
}