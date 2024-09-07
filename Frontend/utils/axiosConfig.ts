import axios from "axios";

export const baseURL = "http://localhost:3000/api";

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
