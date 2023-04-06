require("dotenv").config();

// external lib
const express = require("express");
const products = require("../mock.json")
const mongoose = require("mongoose");
const chalk = require("chalk");

// internal lib
const cluster = require("cluster");
const os = require("os");
const { fork } = require("child_process");

const app = express()
const port = process.env.PORT || 4200;
const connUri = process.env.MONGO_URI;

// get no. of port present in our cup
const noOfCpus = os.cpus().length;

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
    const childProcess = fork("./server/utils/dir")
    childProcess.send({ "dir": process.cwd() });
    childProcess.on("message", message => res.send(message));
})

app.get("/products", (_, res) => {
    res.status(200).json(products)
})

app.get("/", (_, res) => {
    res.send("Hello from Backend")
})

// handle unknown routes
app.get("*", (_, res) => res.status(404).send("Page not found"));

// if (cluster.isMaster) {
//     console.log(process.pid + " In Master")
//     for (let i = 0; i < noOfCpus; i++) {
//         cluster.fork();
//     }
//     cluster.on('exit', () => {
//         console.log('one worker destroy');
//         cluster.fork()
//     })
// } else {
    // app.listen(port, () => {
    //     console.log(chalk.red.bold(`Server ${process.pid} listing on port`) + ": " + chalk.blue.underline.bold(port) + ` worker: ${cluster.worker.id}`)
    // })
// }

app.listen(port,()=>{console.log("port is running")})