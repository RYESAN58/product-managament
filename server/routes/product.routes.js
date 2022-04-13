const productController = require('../controller/product.controller');
const ProductController = require('../controller/product.controller');
const Product = require('../model/product.model')

module.exports = (app)=> {
    app.get('/api', productController.getAllProducts)
    app.post('/api', ProductController.createProduct)
}