import axios from 'axios';
import {API_URL} from "../utils/constans";


const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})


$api.interceptors.request.use((config) => {

    if (config.headers!) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        return config
    }


})


export default $api;