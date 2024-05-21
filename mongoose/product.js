const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id: Number,
    title: String, 
    image: String 
});

module.exports = mongoose.model('products', ProductSchema);