import axios from 'axios';

const API_URL = 'https://your-api-url.com/api'; 

export const signup = (email, password) => {
  return axios.post(`${API_URL}/signup`, { email, password });
};

export const login = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};
