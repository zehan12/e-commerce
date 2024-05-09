import axiosInstance from "../axios/instance"

export const signup = async (email: string, username: string, firstName: string, lastName: string, password: string) => {
    const response = await axiosInstance.post("/auth/register", {
        email,
        username,
        firstName,
        lastName,
        password
    });
    return response.data;
}