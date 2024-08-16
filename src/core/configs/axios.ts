import Axios, { InternalAxiosRequestConfig } from 'axios';

const axios = Axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
})

axios.interceptors.request.use(function (config: InternalAxiosRequestConfig) {
  // handle tokens here
  return config;
});

export default axios
