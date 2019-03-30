const mongoose = require("mongoose");

const ProductSchema =  new mongoose.Schema({
    name:String,
    price:Number,
    amount:Number,
    discription:String
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
module.exports.deleteProd = (data,callback)=>{
    Product.deleteOne({name:data.name,amount:data.amount,price:data.price}, function (err) {
        if (err) return handleError(err);
        callback();
    });
}
module.exports.update = (data,callback)=>{
    Product.findByIdAndUpdate(data._id,data,callback);
}