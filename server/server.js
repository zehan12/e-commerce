require("dotenv").config();

const express   = require("express");
const products  = require("../mock.json")
const mongoose  = require("mongoose");

const app       = express()
const port      = process.env.PORT || 4200;
const connUri   = process.env.MONGO_URI;

//=== - SET UP DATABASE
//Configure mongoose's promise to global promise
mongoose.set('strictQuery', false)
mongoose.promise = global.Promise;
mongoose.connect(connUri);

const connection = mongoose.connection;
connection.once('open', () => console.log('MongoDB --  database connection established successfully!'));
connection.on('error', (err) => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    process.exit();
});

app.use("/api/v1/user",require("./routes/user"));

app.get("/", (req, res) => {
    res.send("hello from backend")
})

app.get("/products", (req, res) => {
    res.status(200).json(products)
})

app.listen(port, () => {
    console.log(`Server listing on port ${port}`)
})