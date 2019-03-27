const mongoose = require("mongoose");

const ProductSchema =  new mongoose.Schema({
    name:String,
    price:Number,
    amount:Number,
    description:String
})
const Product = new mongoose.model("Product",ProductSchema);

module.exports = Product;

module.exports.add = (data,callback)=>{
    let product = new Product(data);
    product.save(callback)
}
module.exports.getAll = (callback)=>{
    Product.find({},(err,products)=>{
        if(err)return callback(err,null);
        else return callback(null,products);
    })
}