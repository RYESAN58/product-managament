const productController = require('../controller/product.controller');
const ProductController = require('../controller/product.controller');
const Product = require('../model/product.model')

module.exports = (app)=> {
    app.post('/api', ProductController.createProduct)
    app.get('/api', productController.getAllProducts)
    app.get('/api/:id', productController.findOneProduct)
}