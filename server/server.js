require("dotenv").config();

const express = require("express");
const products = require("../mock.json")
const mongoose = require("mongoose");
const chalk = require("chalk");
const directoryTree = require("directory-tree");

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

app.get("/api/dir", (_, res) => {
    const excludeDirs = ["node_modules", ".git"];
    function filterTree(tree) {
        if (tree.children) {
            tree.children = tree.children
                .filter(child => !excludeDirs.includes(child.name))
                .map(child => filterTree(child));
            tree.isFolder = true; // add isFolder: true property to folder nodes
        } else {
            tree.isFolder = false; // add isFolder: false property to file nodes
        }
        return tree;
    }
    const directoryPath = process.cwd();
    const originalTree = directoryTree(directoryPath);
    const filteredTree = filterTree(originalTree);
    res.json(filteredTree)
})

app.get("/products", (req, res) => {
    res.status(200).json(products)
})

app.listen(port, () => {
    console.log(chalk.red.bold("Server listing on port") + ": " + chalk.blue.underline.bold(port))
})
