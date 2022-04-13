const { response } = require('express');
const Product = require('../model/product.model');


module.exports = {
    createProduct: (request, response) => {
        Product.create(request.body)
            .then(product => response.json(product))
            .catch(err => response.json(err));
    },
    getAllProducts: (request, response) => {
        Product.find({})
            .then((allProduct) => {
                console.log(allProduct)
                res.json(allProduct)
            })
            .catch((err)=> response.json(err))
    }
}