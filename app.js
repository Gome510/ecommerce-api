import express from "express";
import productsData from './products.json' assert { type: 'json' };

const app = express();
const port = 3000;

app.use("/", (req,res,next)=>{
  console.log(`Received ${req.method} request at ${req.path}`)
  next();
})

app.get("/api/products", (req, res) => {
  res.json(productsData);
});

//app.post("")

app.get("/api/products/:productId", (req,res)=>{
  const product = productsData.find(product => product.id === req.params.productId);
  
  if(!product) res.status(404).json({message: `Product ${req.params.productId} not found`});
  res.json(product)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
