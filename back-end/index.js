const express=require('express');
const cors=require('cors');
const app = express();
const {getAllproducts}=require("./database/index");
const {add}=require("./database/index");
const {update}=require("./database/index");
const {remove}=require("./database/index");
 
app.use(express.json())
app.use(cors())



const port = 5000;


const db = require('./database/index');



app.get('/api/products',(req,res)=> {
    getAllproducts()
    .then((result)=>{res.status(200).json(result)})
    .catch((error)=>console.log(error))

    })


app.post('/api/products/add',(req,res)=> {
    add(req.body)
    .then((result)=>{res.status(200).json(result)})
    .catch((error)=>console.log(error))

    })


app.put('/api/products/update/:id',(req,res)=>{
  update(req.params.id,req.body)
.then((result)=>{res.status(202).json(result)})
.catch((error)=>console.log(error))
}
)


app.delete('/api/products/delete/:id',(req,res)=> {
    remove(req.params.id)
    .then((result)=>{res.status(204).json(result)})
    .catch((error)=>console.log(error))
}) 


 





app.listen(port, ()=>{
console.log( `listening on  ${port}` );
})