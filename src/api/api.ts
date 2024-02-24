import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { axiosErrorComposer } from "../helpers/axiosErrorComposer";

// Default config for the axios instance
const axiosParams = {
  // Set different base URL based on the environment
  baseURL:
    process.env.NODE_ENV === "development"
      ? "https://gorest.co.in/public/v2/"
      : "/",
};

// Create axios instance with default params
const axiosInstance = axios.create(axiosParams);

// Main api function
const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axios.get<T>(url, config),
    delete: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axios.delete<T>(url, config),
    post: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.post<T>(url, body, config),
    patch: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.patch<T>(url, body, config),
    put: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.put<T>(url, body, config),
  };
};

axiosInstance.interceptors.response.use(undefined, function (error) {
  error.handleGlobally = axiosErrorComposer(error);
  return Promise.reject(error);
});

export default api(axiosInstance);
