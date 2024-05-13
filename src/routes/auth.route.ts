import { Router } from "express";
import { createUserHandler, verifyEmailHandler } from "../controllers/auth.controller";
import { validateData } from "../middlewares/validateData.middleware";
import { userRegistrationSchema } from "../zod/user.schema";

const authRouter: Router = Router();

// @route     POST api/auth/register
// @desc      create and register user
// @access    Public
authRouter.post("/register", validateData(userRegistrationSchema), createUserHandler);

// @route     get api/auth/verify-email/:userId/:token
// @desc      email verify with email
// @access    Private
authRouter.get('/email-verify/:userId/:token', verifyEmailHandler);


export { authRouter as authRoute };