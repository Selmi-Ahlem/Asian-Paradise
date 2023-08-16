const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const ProductSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    price:Number,
    category: {
      type: String,
      enum: ["snacks", "noodles", "mochis","drinks","sauces"]
    
    } 
  });
  
const Product = mongoose.model("Product", ProductSchema);

module.exports.Product = Product;