import * as httpRequest from './index.js';

export const listjobsCompany = async (q) => {
    try {
        const res = await httpRequest.post('company/jobs', q);
        return res;
    } catch (e) {
        console.log(e);
        return e?.response.data;
    }
};

export const findJobsByName = async (q) => {
    try {
        const res = await httpRequest.get('jobs/find-name', q);
        return res;
    } catch (e) {
        console.log(e);
        return e?.response.data;
    }
};
