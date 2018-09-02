import axios from 'axios';
import { API_URL } from '../constants';

const STORAGE_TOKEN = localStorage.getItem('token');
const AUTH_TOKEN = `Token ${STORAGE_TOKEN}`;

const api = axios.create({
  baseURL: API_URL,
});

if (STORAGE_TOKEN) api.defaults.headers.common.Authorization = AUTH_TOKEN;
api.defaults.headers.common['Content-Type'] = 'application/json';

export function setTokenHeader(token) {
  api.defaults.headers.common.Authorization = `Token ${token}`;
}
export default api;
