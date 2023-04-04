const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const articles = new Schema ({
    scientificName: {
        type: String,
        required: true,
        unique: true
    },
    commonName: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
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