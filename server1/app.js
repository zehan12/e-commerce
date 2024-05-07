// external lib
const express = require("express");
const products = require("../mock.json")

// internal lib
const { fork } = require("child_process");

const app = express()

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

module.exports = app;
