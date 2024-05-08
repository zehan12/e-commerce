import { Request } from "express";
import { response } from "../constants/response";
import { status } from "../helpers/status";
import { StatusCodes } from 'http-status-codes';
import { IUser, User } from "../model/user.schema";
import { ApiError } from "../utils/ApiError";

interface CreateUser {
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string
}

/**
 * @desc    Sign Up Service
 * @param   { Object } createUser - Body object data
 * @return  { Object<status|statusCode|message|user|tokens> }
 */
const signup = async (createUser: CreateUser) => {

    const { firstName, lastName, username, email, password, } = createUser;

    const isEmailTaken = await User.isEmailTaken(email);

    if (isEmailTaken) {
        return {
            status: status.error,
            statusCode: StatusCodes.CONFLICT,
            message: response.EMAIL_TAKEN,
        };
    }

    const isUsernameAvaiable = await User.isUsernameAvaiable(username);
    console.log("username", isUsernameAvaiable);

    if (!isUsernameAvaiable) {
        return {
            status: status.error,
            statusCode: StatusCodes.CONFLICT,
            message: response.USERNAME_NOT_AVAIABLE,
        };
    }

    const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        username: username.toLowerCase()
    })

    console.log(user, "c")

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, response.INTERNAL_SERVER_ERROR)
    }

    // If everything is OK
    return {
        status: status.success,
        statusCode: StatusCodes.CREATED,
        message: response.SUCCESSFUL_SIGN_UP,
        user: createdUser
    };
}

const generateAccessAndRefereshTokens = async (userId: string) => {
    try {
        const user = await User.findById(userId) as IUser;
        if (!user) return;
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }


    } catch (error) {
        return new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, response.INTERNAL_SERVER_ERROR);
    }
}

export const authService = {
    signup
}