import * as httpRequest from './index';

export const newPass = async (q) => {
    try {
        const res = await httpRequest.post('newPassword', q);
        return res;
    } catch (e) {
        console.log(e);
        return e?.response.data;
    }
};