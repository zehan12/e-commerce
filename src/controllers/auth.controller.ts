import { NextFunction, Request, Response } from "express";
const asyncHandler = require('express-async-handler')
import { authService } from "../services/auth.service";
import { ApiError } from "../utils/ApiError";

/**
 * @desc      create user and register user
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { Object } .......
 * @returns   { JSON } - A JSON object representing the status, message, status and data
 */
export const createUserHandler = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    // 1) Calling sign up service
    let { status, message, statusCode, user } = await authService.signup(
        req.body,
    );

    console.log(status, message, statusCode, "here")
    message = req.polyglot.t(message)

    // 2) Check if something went wrong
    if (status === 'error') {
        new ApiError(statusCode, message);
    }

    // 3) If everything is OK, send data
    return res.status(statusCode).json({
        status,
        message,
        user
    });
});
