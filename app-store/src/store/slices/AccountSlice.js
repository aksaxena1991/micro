import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  createAccount: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  updateAccount: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  deleteAccount: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  allAccountsByCompanyID: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },
};
export const AccountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    resetAccount: (state) => {
      state.allAccountsByCompanyID.request = initialState.allAccountsByCompanyID.request;
      state.allAccountsByCompanyID.response = initialState.allAccountsByCompanyID.response;
      state.allAccountsByCompanyID.failed = initialState.allAccountsByCompanyID.failed;
      // state.allAccountsByCompanyID.data = initialState.allAccountsByCompanyID.data;
      // state.allAccountsByCompanyID.error = initialState.allAccountsByCompanyID.error;

      state.createAccount.request = initialState.createAccount.request;
      state.createAccount.response = initialState.createAccount.response;
      state.createAccount.failed = initialState.createAccount.failed;
      // state.createAccount.data = initialState.createAccount.data;
      // state.createAccount.error = initialState.createAccount.error;

      state.updateAccount.request = initialState.updateAccount.request;
      state.updateAccount.response = initialState.updateAccount.response;
      state.updateAccount.failed = initialState.updateAccount.failed;
      // state.updateAccount.data = initialState.updateAccount.data;
      // state.updateAccount.error = initialState.updateAccount.error;

      state.deleteAccount.request = initialState.deleteAccount.request;
      state.deleteAccount.response = initialState.deleteAccount.response;
      state.deleteAccount.failed = initialState.deleteAccount.failed;
      // state.deleteAccount.data = initialState.deleteAccount.data;
      // state.deleteAccount.error = initialState.deleteAccount.error;


    },
    requestCreateAccount: (state) => {
      state.createAccount.request = true;

    },
    responseCreateAccount: (state, action) => {
      state.createAccount.response = true;
      state.createAccount.data = action?.payload;
    },
    failedCreateAccount: (state, action) => {
      state.createAccount.failed = true;
      state.createAccount.error = action?.payload;
    },
    requestAllAccountByCompanyID: (state) => {
      state.allAccountsByCompanyID.request = true;
    },
    responseAllAccountByCompanyID: (state, action) => {
      state.allAccountsByCompanyID.response = true;
      state.allAccountsByCompanyID.data = action?.payload;
    },
    failedAllAccountByCompanyID: (state, action) => {
      state.allAccountsByCompanyID.failed = true;
      state.allAccountsByCompanyID.error = action?.payload;
    },
    responseDeleteAccount: (state, action) => {
      state.deleteAccount.response = true;
      state.deleteAccount.data = action?.payload;

    },
    failedDeleteAccount: (state, action) => {
      state.deleteAccount.failed = true;
      state.deleteAccount.error = action?.payload;
    },
    responseUpdateAccount: (state, action) => {
      state.updateAccount.response = true;
      state.updateAccount.data = action?.payload;

    },
    failedUpdateAccount: (state, action) => {
      state.updateAccount.failed = true;
      state.updateAccount.error = action?.payload;
    },
    requestDeleteAccount: (state) => {
      state.deleteAccount.request = true
    },
    requestUpdateAccount: (state) => {
      state.updateAccount.request = true
    }

  },
});
export default AccountSlice.reducer;
export const {
  resetAccount,
  requestDeleteAccount,
  failedDeleteAccount,
  responseDeleteAccount,
  requestUpdateAccount,
  failedUpdateAccount,
  responseUpdateAccount,
  failedAllAccountByCompanyID,
  failedCreateAccount,
  requestAllAccountByCompanyID,
  requestCreateAccount,
  responseAllAccountByCompanyID,
  responseCreateAccount
} = AccountSlice.actions;
