import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allPurchases: [],
  currentPurchase: {},
  requestCurrentPurchase: false,
  responseCurrentPurchase: false,
  failedCurrentPurchase: false,
  requestAllPurchase: false,
  requestCreatePurchase: false,
  requestDeletePurchase: false,
  requestUpdatePurchase: false,
  failedAllPurchase: false,
  responseAllPurchase: false,
  responseCreatePurchase: false,
  responseDeletePurchase: false,
  responseUpdatePurchase: false,
  failedCreatePurchase: false,
  failedDeletePurchase: false,
  failedUpdatePurchase: false,
};
export const PurchaseSlice = createSlice({
  name: "purchase",
  initialState,
  reducers: {
    reset: (state) => {
      state.requestCurrentPurchase = false;
      state.responseCurrentPurchase = false;
      state.failedCurrentPurchase = false;
      state.requestAllPurchase = false;
      state.failedAllPurchase = false;
      state.responseAllPurchase = false;
      state.requestCreatePurchase = false;
      state.responseCreatePurchase = false;
      state.failedCreatePurchase = false;
      state.requestUpdatePurchase = false;
      state.responseUpdatePurchase = false;
      state.failedUpdatePurchase = false;
      state.requestDeletePurchase = false;
      state.responseDeletePurchase = false;
      state.failedDeletePurchase = false;
    },
    requestAllPurchase: (state) => {
      state.requestAllPurchase = true;
    },
    responseAllPurchase: (state, action) => {
      state.allPurchases = action?.payload;
      state.responseAllPurchase = true;
    },
    failedAllPurchase: (state) => {
      state.failedAllPurchase = true;
    },
    requestCreatePurchase: (state) => {
      state.requestCreatePurchase = true;
    },
    responseCreatePurchase: (state) => {
      state.responseCreatePurchase = true;
    },
    failedCreatePurchase: (state) => {
      state.failedCreatePurchase = true;
    },
    requestDeletePurchase: (state) => {
      state.requestDeletePurchase = true;
    },
    responseDeletePurchase: (state) => {
      state.responseDeletePurchase = true;
    },
    failedDeletePurchase: (state) => {
      state.failedDeletePurchase = true;
    },
    requestUpdatePurchase: (state) => {
      state.requestUpdatePurchase = true;
    },
    responseUpdatePurchase: (state) => {
      state.responseUpdatePurchase = true;
    },
    failedUpdatePurchase: (state) => {
      state.failedUpdatePurchase = true;
    },
    requestCurrentPurchase: (state) => {
      state.requestCurrentPurchase = true;
    },
    responseCurrentPurchase: (state, action) => {
      state.currentPurchase = action?.payload;
      state.responseCurrentPurchase = true;

    },
    failedCurrentPurchase: (state) => {
      state.failedCurrentPurchase = true;
    },
  },
});
export default PurchaseSlice.reducer;
export const {
  failedCurrentPurchase,
  requestCurrentPurchase,
  responseCurrentPurchase,
  failedAllPurchase,
  failedCreatePurchase,
  failedDeletePurchase,
  failedUpdatePurchase,
  requestAllPurchase,
  requestCreatePurchase,
  responseCreatePurchase,
  requestDeletePurchase,
  requestUpdatePurchase,
  reset,
  responseAllPurchase,
  responseDeletePurchase,
  responseUpdatePurchase,
} = PurchaseSlice.actions;
