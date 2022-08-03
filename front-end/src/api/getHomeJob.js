import * as httpRequest from './index.js';

export const getListJob = async (q) => {
    try {
        const res = await httpRequest.get('jobs/list/'+q);
        return res;
    } catch (e) {
        console.log(e);
        return e?.response.data;
    }
};


export const getListCompany = async (q) => {
    try {
        const res = await httpRequest.get('companies/list/'+q);
        return res;
    } catch (e) {
        console.log(e);
        return e?.response.data;
    }
};


