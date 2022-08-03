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

export const listJob = async (q) => {
    try {
        const res = await httpRequest.get('jobs/list/'+q);
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

export const findJobsByNameAndFilter = async (q) => {
    try {
        const res = await httpRequest.get('jobs/find-name/filter', q);
        return res;
    } catch (e) {
        console.log(e);
        return e?.response.data;
    }
};

export const createJob = async (q, accessToken) => {
    try {
        const res = await httpRequest.postAttachHeaders('jobs/job/create', q, {
            headers: { token: `Bearer ${accessToken}` },
        });
        return res;
    } catch (e) {
        console.log(e);
        return e?.response.data;
    }
};

export const deleteMyJob = async (q, accessToken) => {
    try {
        const res = await httpRequest.deleteAttachHeaders('jobs/job/delete', {
            headers: { token: `Bearer ${accessToken}` },
            data: q,
        });
        return res;
    } catch (e) {
        console.log(e);
        return e?.response.data;
    }
};

export const updateJob = async (q, accessToken) => {
    try {
        const res = await httpRequest.putAttachHeaders('jobs/job/update', q, {
            headers: { token: `Bearer ${accessToken}` },
        });
        return res;
    } catch (error) {
        console.log(error);
        return error?.response.data;
    }
};

export const changeShowHideJob = async (q, accessToken) => {
    try {
        const res = await httpRequest.postAttachHeaders(
            'jobs/job/user-status',
            q,
            { headers: { token: `Bearer ${accessToken}` } },
        );
        return res;
    } catch (error) {
        console.log(error);
        return error?.response.data;
    }
};
