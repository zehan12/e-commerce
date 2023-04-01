require("dotenv").config();

const express   = require("express");
const products  = require("../mock.json")
const mongoose  = require("mongoose");
const chalk     = require("chalk");

const app = express()
const port = process.env.PORT || 4200;
const connUri = process.env.MONGO_URI;

//=== - SET UP DATABASE
//Configure mongoose's promise to global promise
mongoose.set('strictQuery', false)
mongoose.promise = global.Promise;
mongoose.connect(connUri);

const connection = mongoose.connection;
connection.once('open', () => console.log(chalk.bgGreen.white.bold("MongoDB") + " -- " + chalk.blue.underline.bold("database connection established successfully!")));
connection.on('error', (err) => {
    console.log(chalk.green.bold("MongoDB") + "  " + chalk.blue.underline.bold("connection error. Please make sure MongoDB is running. " + err));
    process.exit();
});

// configuring middleware needed for authentication
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1.0/user", require("./routes/user"));
app.use("/api/v1.0/register", require("./routes/register"));
app.use("/api/v1.0/authenticate", require("./routes/authenticate"));

app.get("/", (req, res) => {
    res.send("hello from backend")
})

app.get("/products", (req, res) => {
    res.status(200).json(products)
})

app.listen(port, () => {
    console.log(chalk.red.bold("Server listing on port") + ": " + chalk.blue.underline.bold(port))
})
