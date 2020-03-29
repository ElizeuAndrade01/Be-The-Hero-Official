import axios from 'axios';

const api = axios.create({
    baseURL: 'http://YourIP:3333'
});

export default api;
