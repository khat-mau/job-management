import {
    loginStart,
    loginSuccess,
    loginFailed,
    logoutSuccess,
} from './authSlice';
import * as loginService from '../api/authUser';

export const loginUser = async (user, dispatch) => {
    dispatch(loginStart());
    const res = await loginService.login(user);
    if (res.errorStatus !== undefined && !res.errorStatus) {
        dispatch(loginSuccess(res));
    } else {
        dispatch(loginFailed());
    }
    //navigate('') chuyển trang

    return res;
};

export const logoutUser = async (user, dispatch) => {
    await loginService.logout(user);
    dispatch(logoutSuccess());

    //navigate('') chuyển trang
};
