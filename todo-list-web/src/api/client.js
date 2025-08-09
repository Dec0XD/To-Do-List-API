import axios from 'axios';

let base = import.meta.env.VITE_API_BASE || '/api';
// If pointing to a full host (http/https) but missing "/api", append it for this backend
if (/^https?:\/\//i.test(base) && !/\/(api)(\/?$)/i.test(base)) {
  base = base.replace(/\/+$/, '') + '/api';
}
const api = axios.create({ baseURL: base });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
