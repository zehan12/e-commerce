import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { ApiError } from "../utils/ApiError";
import { TODO } from "../types/custom";
import { userService } from "../services/user.service";

/**
 * @desc      create user and register user
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { Object } .......
 * @returns   { JSON } - A JSON object representing the status, message, status and data
 */
export const getUsersHandler = asyncHandler(async (req: Request, res: Response): Promise<TODO> => {
    // 1) Calling sign up service
    let { status, message, statusCode, users } = await userService.getUsers(
    );

    message = req.polyglot.t(message)

    // 2) Check if something went wrong
    if (status === 'error') {
        new ApiError(statusCode, message);
    }

    // 3) If everything is OK, send data
    return res.status(statusCode).json({
        status,
        message,
        users
    });
});
