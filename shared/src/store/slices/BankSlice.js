import { createSlice } from "@reduxjs/toolkit";
const initialState = {

  createBank: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  updateBank: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  deleteBank: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  allBank: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  }


};
export const BankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    resetBank: (state) => {
      state.createBank.failed = initialState.createBank.failed;
      state.updateBank.failed = initialState.updateBank.failed;
      state.deleteBank.failed = initialState.deleteBank.failed;
      state.allBank.failed = initialState.allBank.failed;
      state.allBank.request = initialState.allBank.request;
      state.createBank.request = initialState.createBank.request;
      state.updateBank.request = initialState.updateBank.request;
      state.deleteBank.request = initialState.deleteBank.request;
      state.allBank.response = initialState.allBank.response;
      state.createBank.response = initialState.createBank.response;
      state.updateBank.response = initialState.updateBank.response;
      state.deleteBank.response = initialState.deleteBank.response;

    },
    requestCreateBank: (state) => {

      state.createBank.request = true;
    },
    responseCreateBank: (state, action) => {
      state.createBank.response = true;
      state.createBank.data = action?.payload;
    },
    failedCreateBank: (state, action) => {
      state.createBank.failed = true
      state.createBank.error = action.payload
    },
    requestAllBank: (state) => {
      state.allBank.request = true
    },
    responseAllBank: (state, action) => {
      state.allBank.response = true;
      state.allBank.data = action?.payload;
    },
    failedBank: (state, action) => {
      state.allBank.failed = true
      state.allBank.error = action?.payload;
    },
    responseDeleteBank: (state, action) => {
      state.deleteBank.response = true
      state.deleteBank.data = action?.payload;

    },
    failedDeleteBank: (state, action) => {
      state.deleteBank.failed = true;
      state.deleteBank.error = action.payload
    },
    responseUpdateBank: (state, action) => {
      state.updateBank.response = true;
      state.updateBank.data = action?.payload;

    },
    failedUpdateBank: (state, action) => {
      state.updateBank.failed = true;
      state.updateBank.error = action.payload
    },
    requestDeleteBank: (state) => {
      state.deleteBank.request = true;
    },
    requestUpdateBank: (state) => {
      state.updateBank.request = true
    }

  },
});
export default BankSlice.reducer;
export const {
  resetBank,
  requestDeleteBank,
  requestUpdateBank,
  failedUpdateBank,
  responseUpdateBank,
  failedDeleteBank,
  responseDeleteBank,
  failedBank,
  failedCreateBank,
  requestAllBank,
  requestCreateBank,
  responseAllBank,
  responseCreateBank
} = BankSlice.actions;
