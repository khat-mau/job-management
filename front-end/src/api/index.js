import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { loginSuccess } from '../redux/authSlice';
import { store } from '../redux/store';

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

//AUTO REFRESH TOKEN
//sẽ đc gọi trc khi gửi request
httpRequest.interceptors.request.use(async (config) => {
    // console.log(config);
    // check token và refreshToken nếu token đó hết hạn..
    const user = store.getState().auth.login?.currentUser;
    if (user) {
        let date = new Date().getTime() / 1000;
        const decoded = jwt_decode(user?.accessToken);
        if (decoded.exp < date) {
            try {
                const res = await axios.post(
                    'http://localhost:8000/api/refresh',
                    {
                        withCredentials: true, // gắn cookie
                    },
                );
                const refreshUser = {
                    ...user,
                    accessToken: res.data.accessToken,
                };
                store.dispatch(loginSuccess(refreshUser));
                config.data.headers['token'] = 'Bearer ' + res.data.accessToken;
            } catch (e) {
                console.log(e);
            }
        }
    }
    return config;
});

//
