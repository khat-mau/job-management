import * as httpRequest from './index';

export const report = async (q) => {
    try {
        const res = await httpRequest.post('report', q);
        return res;
    } catch (e) {
        console.log(e);
        return e?.response.data;
    }
};