import axiosInstance from "../axios/instance"

type UserData = {
    email: string,
    username: string,
    firstName: string,
    lastName: string,
    password: string
}


const signup = async (userData: UserData) => {
    const response = await axiosInstance.post("/auth/register", userData);
    return response.data;
}

export const authService = {
    signup
}