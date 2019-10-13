import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

api.interceptors.request.use(async config => {
  const headers = config;
  headers.headers['Content-Type'] = 'application/json';

  return headers;
});

export default api;
