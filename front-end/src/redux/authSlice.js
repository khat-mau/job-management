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
} = authSlice.actions;

export default authSlice.reducer;
