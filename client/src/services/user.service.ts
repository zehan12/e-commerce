import axiosInstance from "../axios/instance"
import { config } from "../config/config";

export const getUsers = async () => {
    const response = await axiosInstance.get("user/");
    const res = await fetch(config.url.BACKEND_URL + "/user", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    console.log(response);
}