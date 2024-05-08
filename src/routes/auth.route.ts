import { Router } from "express";
import { createUserHandler } from "../controllers/auth.controller";
import { validateData } from "../middlewares/validateData.middleware";
import { userRegistrationSchema } from "../zod/user.schema";

const authRouter: Router = Router();

// @route     POST api/auth/register
// @desc      create and register user
// @access    Public
authRouter.post("/register", validateData(userRegistrationSchema), createUserHandler);

export default authRouter;