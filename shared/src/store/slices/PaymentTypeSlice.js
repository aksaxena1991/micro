import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allPaymentType: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },

  createPaymentType: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  updatePaymentType: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  deletePaymentType: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
};
export const PaymentTypeSlice = createSlice({
  name: "paymentType",
  initialState,
  reducers: {
    resetPaymentType: (state) => {
      state.allPaymentType.request = initialState.allPaymentType.request;
      state.allPaymentType.response = initialState.allPaymentType.response;
      state.allPaymentType.failed = initialState.allPaymentType.failed;

      state.createPaymentType.request = initialState.createPaymentType.request;
      state.createPaymentType.response =
        initialState.createPaymentType.response;
      state.createPaymentType.failed = initialState.createPaymentType.failed;

      state.updatePaymentType.request = initialState.updatePaymentType.request;
      state.updatePaymentType.response =
        initialState.updatePaymentType.response;
      state.updatePaymentType.failed = initialState.updatePaymentType.failed;

      state.deletePaymentType.request = initialState.deletePaymentType.request;
      state.deletePaymentType.response =
        initialState.deletePaymentType.response;
      state.deletePaymentType.failed = initialState.deletePaymentType.failed;
    },
    requestCreatePaymentType: (state) => {
      state.createPaymentType.request = true;
    },
    responseCreatePaymentType: (state, action) => {
      state.createPaymentType.response = true;
      state.createPaymentType.data = action?.payload;
    },
    failedCreatePaymentType: (state, action) => {
      state.createPaymentType.failed = true;
      state.createPaymentType.error = action?.payload;
    },
    requestAllPaymentType: (state) => {
      state.allPaymentType.request = true;
    },
    responseAllPaymentType: (state, action) => {
      state.allPaymentType.response = true;
      state.allPaymentType.data = action?.payload;
    },
    failedAllPaymentType: (state, action) => {
      state.allPaymentType.failed = true;
      state.allPaymentType.error = action?.payload;
    },
    responseDeletePaymentType: (state, action) => {
      state.deletePaymentType.response = true;
      state.deletePaymentType.data = action?.payload;
    },
    failedDeletePaymentType: (state, action) => {
      state.deletePaymentType.failed = true;
      state.deletePaymentType.error = action?.payload;
    },
    responseUpdatePaymentType: (state, action) => {
      state.updatePaymentType.response = true;
      state.updatePaymentType.data = action?.payload;
    },
    failedUpdatePaymentType: (state, action) => {
      state.updatePaymentType.failed = true;
      state.updatePaymentType.error = action?.payload;
    },
    requestDeletePaymentType: (state) => {
      state.deletePaymentType.request = true;
    },
    requestUpdatePaymentType: (state) => {
      state.updatePaymentType.request = true;
    },
  },
});
export default PaymentTypeSlice.reducer;
export const {
  resetPaymentType,
  requestDeletePaymentType,
  requestUpdatePaymentType,
  failedUpdatePaymentType,
  responseUpdatePaymentType,
  failedDeletePaymentType,
  responseDeletePaymentType,
  failedAllPaymentType,
  failedCreatePaymentType,
  requestAllPaymentType,
  requestCreatePaymentType,
  responseAllPaymentType,
  responseCreatePaymentType,
} = PaymentTypeSlice.actions;
