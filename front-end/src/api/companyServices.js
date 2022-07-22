import * as httpRequest from './index';

export const createCompany = async (q, accessToken) => {
    try {
        const res = await httpRequest.postAttachHeaders(
            'companies/company/create',
            q,
            {
                headers: { token: `Bearer ${accessToken}` },
            },
        );
        return res;
    } catch (e) {
        console.log(e);
        return e?.response.data;
    }
};

export const myCompanies = async (q) => {
    try {
        const res = await httpRequest.post('companies/', q);
        return res;
    } catch (e) {
        console.log(e);
        return e?.response.data;
    }
};
