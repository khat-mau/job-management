import * as httpRequest from './index';

export const getAllAddresses = async () => {
    try {
        const res = await httpRequest.get('address');
        return res;
    } catch (e) {
        console.log(e);
        return e?.response.data;
    }
};
