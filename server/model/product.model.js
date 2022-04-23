const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A title is required'],
        minlength: [2, 'must be 2 chcaracters long']
    },
    price: {
        type: String,
        min: [1, 'Must be greater than 0']
    },
    description: {
        type: String
    }
},{ timestamps: true })



module.exports = mongoose.model('Product', ProductSchema);
