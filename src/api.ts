import axios from 'axios';

const apiUrl = process.env.API_URL;
axios.defaults.baseUrl = apiUrl;

const { get } = axios;

export default {
  getAll: () => get(),
};
