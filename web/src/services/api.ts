import axios from 'axios';

const { REACT_APP_API_URL } = process.env;
const api = axios.create({
  baseURL: REACT_APP_API_URL || 'https://nlw-proffy.herokuapp.com/'
});

export default api;
