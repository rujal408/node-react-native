import axios from 'axios';
import env from '../constants/env';

const axiosConfig = axios.create({ baseURL: env.BASE_URL });

axiosConfig.interceptors.request.use((config) => {
  return config;
});

export default axiosConfig;
