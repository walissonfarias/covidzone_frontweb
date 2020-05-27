import axios from 'axios';

const api = axios.create({
    baseURL: 'https://covidzone-backend-production.herokuapp.com/',
});

export default api;