import axios, { type AxiosInstance } from "axios";

const api: AxiosInstance  = axios.create({

    baseURL: "http://localhost:5000"
})

// Interceptor para adicionar token
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export default api ;