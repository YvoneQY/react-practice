import axios from 'axios';
const service = axios.create({
  //  baseURL: 'http://some-domain.com/api',
    baseURL:'devApi',
    timeout: 7000
})

service.interceptors.request.use(function (config) {
    console.log(process.env.NODE_ENV)
    return config;
}, function (error) {
    return Promise.reject(error);
})

service.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error)
})

export default service;