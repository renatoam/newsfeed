import Axios, { InternalAxiosRequestConfig } from 'axios';

const axios = Axios.create()

axios.interceptors.request.use(function (config: InternalAxiosRequestConfig) {
  if (config.url === process.env.THEGUARDIAN_HOST) {
    config.url += `?${process.env.THEGUARDIAN_APIKEY}`
  }

  if (config.url === process.env.BBC_RAPIDAPI_HOST) {
    config.headers['x-rapidapi-key'] = process.env.BBC_RAPIDAPI_APIKEY
    config.headers['x-rapidapi-host'] = process.env.BBC_RAPIDAPI_HOST
  }

  if (config.url === process.env.NEWSAPI_HOST) {
    config.headers['X-Api-Key'] = process.env.NEWSAPI_APIKEY
  }
  
  return config;
});

export default axios
