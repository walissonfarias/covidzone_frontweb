import axios from 'axios';

const api = axios.create({
    baseURL: 'https://covidzone-backend-staging.herokuapp.com/',
});

export default api;