import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'http://localhost:8000/api/',
});

export const get = async (path, option = {}) => {
    const response = await httpRequest.get(path, option);
    return response.data;
};

export const post = async (path, option = {}) => {
    const response = await httpRequest.post(path, option);
    return response.data;
};
