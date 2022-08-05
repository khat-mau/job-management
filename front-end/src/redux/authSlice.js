import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            error: false,
        },
        isShowLogin: false,
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },
        logoutSuccess: (state) => {
            state.login.isFetching = false;
            state.login.currentUser = null;
            state.login.error = false;
        },

        handleLogin: (state) => {
            state.isShowLogin = !state.isShowLogin;
        },

        hideLogin: (state) => {
            state.isShowLogin = false;
        },

        showLogin: (state) => {
            state.isShowLogin = true;
        },
        changeValueRate: (state, action) => {
            for (let i = 0; i < state.login.currentUser?.rate?.length; i++) {
                if (
                    state.login.currentUser?.rate[i].job === action.payload.job
                ) {
                    state.login.currentUser.rate[i].value =
                        action.payload.value;
                    break;
                }
            }
        },
    },
});

export const {
    loginStart,
    loginFailed,
    loginSuccess,
    logoutSuccess,
    handleLogin,
    showLogin,
    hideLogin,
    changeValueRate,
} = authSlice.actions;

export default authSlice.reducer;
