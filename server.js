const express = require("express");
const products = require("./mock.json")

const app = express()
const port = 4200;

app.get("/", (req, res) => {
    res.send("hello from backend")
})

app.get("/products",(req, res)=>{
    res.status(200).json(products)
})

app.listen(port, () => {
    console.log(`Server listing on port ${port}`)
})