import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import setAxiosHeader from "./setAxiosHeader";
import { getRefreshToken } from "./getToken";
import { config } from "../config/config";

interface RetryQueueItem {
    resolve: (value?: any) => void;
    reject: (error?: any) => void;
    config: AxiosRequestConfig;
}

const axiosInstance: AxiosInstance = Axios.create({
    baseURL: config.url.BACKEND_URL,
});

axiosInstance.interceptors.request.use(
    async (config) => setAxiosHeader(config),
    (error) => Promise.reject(error)
);

const refreshAndRetryQueue: RetryQueueItem[] = [];
let isRefreshing = false;

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest: AxiosRequestConfig = error.config;
        if (error.response && error.response.status === 401) {
            if (!isRefreshing) {
                isRefreshing = true;
                try {
                    const refreshToken = getRefreshToken();
                    if (refreshToken) {
                        await Axios({
                            method: "POST",
                            url: `api/v1/auth/refreshtoken`,
                            headers: {
                                "Content-Type": "application/json",
                            },
                            data: {
                                refreshToken: refreshToken,
                            },
                        })
                            .then(async (response) => {
                                localStorage.setItem("token", response?.data?.token);
                                localStorage.setItem(
                                    "refreshToken",
                                    response?.data?.refreshToken
                                );
                                return axiosInstance(originalRequest);
                            })
                            .catch((errorRefresh) => {
                                console.log(errorRefresh);
                                localStorage.clear();
                            });

                        // Repeat all missed requests by 401
                        refreshAndRetryQueue.forEach(({ config, resolve, reject }) => {
                            axiosInstance(config)
                                .then((response) => resolve(response))
                                .catch((err) => reject(err));
                        });
                        refreshAndRetryQueue.length = 0;
                    } else {
                        localStorage.clear();
                        window.location.href = "/";
                        return Promise.reject(error);
                    }
                } catch (refreshError) {
                    refreshAndRetryQueue.length = 0;
                    localStorage.clear();
                } finally {
                    isRefreshing = false;
                }
            }
            return new Promise<void>((resolve, reject) => {
                refreshAndRetryQueue.push({ config: originalRequest, resolve, reject });
            });
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
