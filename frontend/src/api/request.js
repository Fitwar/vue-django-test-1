// master/frontend/src/api/request.js
import axios from 'axios';

// 创建一个 Axios 实例
const service = axios.create({
  // baseURL 留空，因为 Vite 的 proxy 会处理请求前缀
  baseURL: '/', 
  timeout: 10000 // 请求超时时间
});

// 可以在这里添加请求拦截器、响应拦截器等
// service.interceptors.request.use(...)

export default service;