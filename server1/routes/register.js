const registerRouter = require("express").Router();
const { handleCreateUser } = require("../controller/register");

registerRouter.post("/",handleCreateUser);

module.exports = registerRouter;