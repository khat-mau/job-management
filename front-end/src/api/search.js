import * as httpRequest from './index';

export const any = async (q) => {
    try {
        const res = await httpRequest.get('search/any', q);
        return res;
    } catch (e) {
        console.log(e);
        return e?.response.data;
    }
};
