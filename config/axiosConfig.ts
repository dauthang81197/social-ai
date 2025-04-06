import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const baseURL = process.env.BASE_URL;


const axiosNoAuth: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: Number(process.env.TIMEOUT) || 5000,
});


const axiosAuth: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: Number(process.env.TIMEOUT) || 5000,
});

axiosAuth.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const token = 'your-auth-token'; 
    if (token) {
      config.headers!['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosNoAuth.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosNoAuth, axiosAuth };
