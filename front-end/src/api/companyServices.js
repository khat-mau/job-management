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

export const myJobsInCompany = async (q, accessToken) => {
    try {
        const res = await httpRequest.postAttachHeaders(
            'companies/own-company/jobs',
            q,
            { headers: { token: `Bearer ${accessToken}` } },
        );
        return res;
    } catch (error) {
        console.log(error);
        return error?.response.data;
    }
};

export const updateCompany = async (q, accessToken) => {
    try {
        const res = await httpRequest.putAttachHeaders(
            'companies/company/update',
            q,
            { headers: { token: `Bearer ${accessToken}` } },
        );
        return res;
    } catch (error) {
        console.log(error);
        return error?.response.data;
    }
};

export const deleteMyCompany = async (q, accessToken) => {
    try {
        const res = await httpRequest.deleteAttachHeaders(
            'companies/company/delete',
            {
                headers: { token: `Bearer ${accessToken}` },
                data: q,
            },
        );
        return res;
    } catch (e) {
        console.log(e);
        return e?.response.data;
    }
};
