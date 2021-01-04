import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
});

const token = window.localStorage.getItem('token')

if (token) {
  api.defaults.headers.authorization = `Bearer ${token}`
}

export default api;