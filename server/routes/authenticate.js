const express = require("express");
const { handleLogin } = require("../controller/authenticate");
const authRouter = express.Router();

authRouter.post("/login", handleLogin);

module.exports = authRouter;