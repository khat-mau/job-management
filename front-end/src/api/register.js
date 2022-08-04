import * as httpRequest from './index';

export const register = async (q) => {
    try {
        const res = await httpRequest.post('register', q);
        return res;
    } catch (e) {
        console.log(e);
        return e?.response.data;
    }
};
