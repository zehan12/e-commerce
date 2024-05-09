import { Router } from "express";
import { getUsersHandler } from "../controllers/user.controller";

const userRouter: Router = Router();

// @route     GET api/user
// @desc      create and register user
// @access    Public
userRouter.get("/", getUsersHandler);

export default userRouter;