import * as httpRequest from './index';

export const createCompany = async (q) => {
    try {
        const res = await httpRequest.post('companies/company/create', q);
        return res;
    } catch (e) {
        console.log(e);
        return e?.response.data;
    }
};
