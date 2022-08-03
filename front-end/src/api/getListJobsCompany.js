import * as httpRequest from './index.js';

export const listjobsCompany = async (q) => {
    try {
        const res = await httpRequest.get('companies/jobs/'+q);
        return res;
    } catch (e) {
        console.log(e);
        return e?.response.data;
    }
};

export const detailJob = async (q) => {
    try {
        const res = await httpRequest.get('jobs/detailsJob/'+q);
        return res;
    }catch (e) {
        console.log(e);
        return e?.response.data;
    }
}
export const listCompany = async (q) => {
    try {
        const res = await httpRequest.get('companies/list/'+q);
        return res;
    }catch (e) {
        console.log(e);
        return e?.response.data;
    }
}

