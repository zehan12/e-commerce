const express = require("express");
const app = express()
const port = 4200;

app.get("/", (req, res) => {
    res.send("hello from backend")
})

app.listen(port, () => {
    console.log(`Server listing on port ${port}`)
})