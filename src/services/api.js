import axios from 'axios';

export const headers = {
  'Content-Type' : 'application/json',
}

const api = axios.create({
  baseURL: 'localhost:3002',
});

export default api;
