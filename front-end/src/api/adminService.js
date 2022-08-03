import * as httpRequest from './index';

export const listRequestJobsAndCompanies = async (q, accessToken) => {
    try {
        const res = await httpRequest.postAttachHeaders('admin/requests', q, {
            headers: { token: `Bearer ${accessToken}` },
        });
        return res;
    } catch (e) {
        console.log(e);
        return e?.response.data;
    }
};

export const viewARequest = async (q, accessToken) => {
    try {
        const res = await httpRequest.postAttachHeaders(
            'admin/requests/detail',
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

export const acceptRequest = async (q, accessToken) => {
    try {
        const res = await httpRequest.postAttachHeaders(
            'admin/requests/accept',
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

export const rejectRequest = async (q, accessToken) => {
    try {
        const res = await httpRequest.postAttachHeaders(
            'admin/requests/reject',
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
