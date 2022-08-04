import * as httpRequest from './index';

export const resetPassword = async (q) => {
    try {
        const res = await httpRequest.post('sendEmail', q);
        return res;
    } catch (e) {
        console.log(e);
        return e?.response.data;
    }
};