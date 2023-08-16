const mongoose = require("mongoose");
const {Product}=require('./Product.js');
const data= require("../database/Product.js")
const mongoUri = "mongodb://127.0.0.1/ChinaStore";
mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true })
.then(()=>{console.log("db connected :)")}).catch(err=>console.log(err));
const db = mongoose.connection;


const getAllproducts = () => {
return Product.find()
}; 


const add=(data)=>{
return Product.create(data)
};



const update = (id, data) => {
  return Product.updateOne({ _id: id }, data);
};


const remove = (id) => {
  return Product.deleteOne({_id: id });
};



module.exports = {
  db,  
  getAllproducts,
  add,
  update,
  remove
};