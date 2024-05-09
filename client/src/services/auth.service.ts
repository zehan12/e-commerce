import axiosInstance from "../axios/instance"

export const signup = async () => {
    const response = await axiosInstance.get("users/");
    console.log(response);
}