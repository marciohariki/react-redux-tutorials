import axios from 'axios';

const API = 'https://api.unsplash.com';
const ACCESS_KEY = 'f24226e5b9398098f042b620e9be41b113bb6b594e8007947b901dcaa92c5f07';

export default axios.create({
    baseURL: `${API}`,
    headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`
    },
})