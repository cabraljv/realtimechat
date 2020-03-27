import axios from 'axios';

const api = axios.create({
    baseURL: 'http://191.242.97.194:3333'
})

export default api;