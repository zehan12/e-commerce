const express = require("express");
const { user } = require("../controller/user");
const userRouter = express.Router();

userRouter.get("/", user)

// list of username 

module.exports = userRouter;