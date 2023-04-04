const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const articles = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    },
    model: {
        type: String,
        required: true
    },
    extent: {
        type: Number,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    stock: {
        type: Boolean,
        required: true
    },
    category: {
        type: String,
        required: true
    }   
})

const Article = mongoose.model('Article', articles);
module.exports = {Article}