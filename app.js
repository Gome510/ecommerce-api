import express from "express";
import productsData from './products.json' assert { type: 'json' };

const app = express();
const port = 3000;

// Middleware
app.use("/", (req,res,next)=>{
  console.log(`Received ${req.method} request at ${req.path}`)
  next();
})

app.use(express.json());

// Endpoints
app.get("/api/products", (req, res) => {
  res.json(productsData);
});

app.get("/api/products/:productId", (req,res)=>{
  const product = productsData.find(product => product.id == req.params.productId);
  
  if(!product) res.status(404).json({message: `Product ${req.params.productId} not found`});
  res.json(product)
})

app.post("/api/products", (req,res)=>{
  const productDetails = req.body;

  const product = {
    id: productsData.length,
    ...productDetails
  }
  productsData.push(product)
  res.json(productsData[productsData.length-1])

})

app.put("/api/products/:productId", (req,res)=>{
  const changes = req.body;
  const id = req.params.productId;

  const productIndex = productsData.findIndex(product => product.id == id);
  if(productIndex < 0){
    res.status(404).send("Product Id Not Found")
  }

  productsData[productIndex] = {
    ...productsData[productIndex],
    ...changes
  }
  const updatedProduct = productsData.find(product => product.id == id);
  res.json(updatedProduct)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
