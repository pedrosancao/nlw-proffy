import axios from 'axios';

const { PUBLIC_URL, REACT_APP_API_URL } = process.env;
const api = axios.create({
  baseURL: REACT_APP_API_URL ? `${PUBLIC_URL}/${REACT_APP_API_URL}` : 'http://localhost:8000'
});

export default api;
