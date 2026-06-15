import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('pregmath_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authApi = {
  register: (name, email, password) => {
    return api.post('/auth/register', { name, email, password });
  },
  login: (email, password) => {
    return api.post('/auth/login', { email, password });
  },
};

export default api;
