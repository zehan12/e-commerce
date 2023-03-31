const express = require("express");
const { user } = require("../controller/user");
const userRouter = express.Router();

userRouter.get("/", user)

module.exports = userRouter;