import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  login: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  registerEmployee: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  authDetails: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  verifyOTP: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
};
export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuth: (state) => {
      state.login.request = initialState.login.request;
      state.login.response = initialState.login.response;
      state.login.failed = initialState.login.failed;

      state.verifyOTP.request = initialState.verifyOTP.request;
      state.verifyOTP.response = initialState.verifyOTP.response;
      state.verifyOTP.failed = initialState.verifyOTP.failed;

      state.authDetails.request = initialState.authDetails.request;
      state.authDetails.response = initialState.authDetails.response;
      state.authDetails.failed = initialState.authDetails.failed;

      state.registerEmployee.request = initialState.registerEmployee.request;
      state.registerEmployee.response = initialState.registerEmployee.response;
      state.registerEmployee.failed = initialState.registerEmployee.failed;

    },
    requestLogout: (state) => {
      state = initialState;
    },
    requestVerifyOTP: (state) => {
      state.verifyOTP.request = true;

    },
    responseVerifyOTP: (state, action) => {
      state.verifyOTP.response = true;
      state.verifyOTP.data = action?.payload;
    },
    failedVerifyOTP: (state, action) => {
      state.verifyOTP.failed = true;
      state.verifyOTP.error = action?.payload;
    },
    requestLogin: (state) => {
      state.login.request = true;
    },
    responseLogin: (state, action) => {
      state.login.response = true;
      state.login.data = action?.payload;
    },
    failedLogin: (state, action) => {
      state.login.failed = true;
      state.login.error = action?.payload;
    },
    requestRegisterEmployee: (state) => {
      state.registerEmployee.request = true;
    },
    responseRegisterEmployee: (state, action) => {
      state.registerEmployee.response = true;
      state.registerEmployee.data = action?.payload;
    },
    failedRegisterEmployee: (state, action) => {
      state.registerEmployee.failed = true;
      state.registerEmployee.error = action?.payload;
    },
    requestAuthDetails: (state) => {
      state.authDetails.request = true;
    },
    responseAuthDetails: (state, action) => {
      state.authDetails.response = true;
      state.authDetails.data = action?.payload;
    },
    failedAuthDetails: (state, action) => {
      state.authDetails.failed = true;
      state.authDetails.error = action?.payload;
    },
  },
});
export default AuthSlice.reducer;
export const {
  resetAuth,
  requestLogin,
  failedLogin,
  responseLogin,
  requestVerifyOTP,
  failedVerifyOTP,
  responseVerifyOTP,
  requestLogout,
  failedRegisterEmployee,
  requestRegisterEmployee,
  responseRegisterEmployee,
  failedAuthDetails,
  requestAuthDetails,
  responseAuthDetails,
} = AuthSlice.actions;
