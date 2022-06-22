import * as httpRequest from './index';

export const login = async (q) => {
    try {
        const res = await httpRequest.post('login', q);
        return res;
    } catch (e) {
        console.log(e);
        return e?.response.data;
    }
};

export const logout = async (accessToken) => {
    try {
        const res = await httpRequest.post('logout', {
            headers: { token: `Bearer ${accessToken}` },
        });
        return res;
    } catch (e) {
        console.log(e);
        return e?.response.data;
    }
};
