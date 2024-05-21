const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/e-comm");

const ProductSchema = new mongoose.Schema({
    id: Number,
    title: String, 
    image: String 
});

    const insert = async () => {
        const ProductModel = new mongoose.model('products', ProductSchema);
        let data = new ProductModel({
            id: 15,
            title: 'Test', 
            image: 'Asdfghjkl' 
        });
        let result = await data.save();
    }
    // insert();

    const update = async () => {
        const ProductModel = new mongoose.model('products', ProductSchema);
        let result = await ProductModel.updateOne(
            { id:15 },
            { $set: {title:"ZXC"}}
        )
    }
    // update();

    const dellete = async () => {
        const ProductModel = new mongoose.model('products', ProductSchema);
        let result = await ProductModel.deleteOne(
            { id:15 }
        )
    }
    // dellete();

    const read = async () => {
        const ProductModel = new mongoose.model('products', ProductSchema);
        // let result = await ProductModel.find();
        let result = await ProductModel.find({id: 10});         // for single data
        console.log(result);
    }
    // read();