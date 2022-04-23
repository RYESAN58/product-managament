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
            .then( allProduct => {
                console.log(allProduct)
                response.json(allProduct)
            })
            .catch((err)=> {
                console.log(err)
                response.json(err)
            })
    },
    findOneProduct: (request, response) => {
        Product.findOne({_id:request.params.id})
            .then(product => response.json(product))
            .catch(err=> response.json(err))
    },
    updateProduct: (request, response) => {
        Product.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
            .then(updatedProduct => response.json(updatedProduct))
            .catch(err=> response.json(err))
    },
    deleteProduct: (request, response) => {
        Product.deleteOne({_id: request.params.id})
            .then(deleteConfirmation => response.json(deleteConfirmation))
            .catch(err => response.json(err))
    }
}