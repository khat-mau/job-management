import { loginStart, loginSuccess, loginFailed } from './authSlice';
import * as loginService from '../api/loginUser';

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
