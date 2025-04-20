import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allPaymentMode: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },
  createPaymentMode: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  updatePaymentMode: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  deletePaymentMode: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
};
export const PaymentModeSlice = createSlice({
  name: "paymentMode",
  initialState,
  reducers: {
    resetPaymentMode: (state) => {
      state.allPaymentMode.request = initialState.allPaymentMode.request;
      state.allPaymentMode.response = initialState.allPaymentMode.response;
      state.allPaymentMode.failed = initialState.allPaymentMode.failed;

      state.createPaymentMode.request = initialState.createPaymentMode.request;
      state.createPaymentMode.response =
        initialState.createPaymentMode.response;
      state.createPaymentMode.failed = initialState.createPaymentMode.failed;

      state.updatePaymentMode.request = initialState.updatePaymentMode.request;
      state.updatePaymentMode.response =
        initialState.updatePaymentMode.response;
      state.updatePaymentMode.failed = initialState.updatePaymentMode.failed;

      state.deletePaymentMode.request = initialState.deletePaymentMode.request;
      state.deletePaymentMode.response =
        initialState.deletePaymentMode.response;
      state.deletePaymentMode.failed = initialState.deletePaymentMode.failed;
    },
    requestCreatePaymentMode: (state) => {
      state.createPaymentMode.request = true;
    },
    responseCreatePaymentMode: (state, action) => {
      state.createPaymentMode.response = true;
      state.createPaymentMode.data = action?.payload;
    },
    failedCreatePaymentMode: (state, action) => {
      state.createPaymentMode.failed = true;
      state.createPaymentMode.error = action?.payload;
    },
    requestAllPaymentMode: (state) => {
      state.allPaymentMode.request = true;
    },
    responseAllPaymentMode: (state, action) => {
      state.allPaymentMode.response = true;
      state.allPaymentMode.data = action?.payload;
    },
    failedAllPaymentMode: (state, action) => {
      state.allPaymentMode.failed = true;
      state.allPaymentMode.error = action?.payload;
    },
    responseDeletePaymentMode: (state, action) => {
      state.deletePaymentMode.response = true;
      state.deletePaymentMode.data = action?.payload;
    },
    failedDeletePaymentMode: (state, action) => {
      state.deletePaymentMode.failed = true;
      state.deletePaymentMode.error = action?.payload;
    },
    responseUpdatePaymentMode: (state, action) => {
      state.updatePaymentMode.response = true;
      state.updatePaymentMode.data = action?.payload;
    },
    failedUpdatePaymentMode: (state, action) => {
      state.updatePaymentMode.failed = true;
      state.updatePaymentMode.error = action?.payload;
    },
    requestDeletePaymentMode: (state) => {
      state.deletePaymentMode.request = true;
    },
    requestUpdatePaymentMode: (state) => {
      state.updatePaymentMode.request = true;
    },
  },
});
export default PaymentModeSlice.reducer;
export const {
  resetPaymentMode,
  requestDeletePaymentMode,
  requestUpdatePaymentMode,
  failedUpdatePaymentMode,
  responseUpdatePaymentMode,
  failedDeletePaymentMode,
  responseDeletePaymentMode,
  failedAllPaymentMode,
  failedCreatePaymentMode,
  requestAllPaymentMode,
  requestCreatePaymentMode,
  responseAllPaymentMode,
  responseCreatePaymentMode,
} = PaymentModeSlice.actions;
