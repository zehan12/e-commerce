import { Request } from "express";
import { response } from "../constants/response";
import { status } from "../helpers/status";
import { StatusCodes } from 'http-status-codes';
import { User } from "../model/user.schema";

/**
 * @desc    Get Users Service
 * @param   { Object } createUser - Body object data
 * @return  { Object<status|statusCode|message|users> }
 */
const getUsers = async () => {
    const users = await User.find().select("-password");

    if (!users) {
        return {
            status: status.error,
            statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
            message: response.INTERNAL_SERVER_ERROR,
        };
    }

    // If everything is OK
    return {
        status: status.success,
        statusCode: StatusCodes.OK,
        message: response.SUCCESSFUL_USER_DETAILS,
        users
    };
}


export const userService = {
    getUsers
}