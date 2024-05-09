import axiosInstance from "../axios/instance"

export const getUsers = async () => {
    const response = await axiosInstance.get("/user");
    return response.data;
}