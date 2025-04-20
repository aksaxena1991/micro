import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allSignatureByBrFrIDOrCompanyID: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },


  updateSignature: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  deleteSignature: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  createSignature: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  }
};
export const SignatureSlice = createSlice({
  name: "signature",
  initialState,
  reducers: {
    resetSignature: (state) => {
      state.createSignature.request = initialState.createSignature.request;
      state.createSignature.response = initialState.createSignature.response;
      state.createSignature.failed = initialState.createSignature.failed;

      state.updateSignature.request = initialState.updateSignature.request;
      state.updateSignature.response = initialState.updateSignature.response;
      state.updateSignature.failed = initialState.updateSignature.failed;

      state.deleteSignature.request = initialState.deleteSignature.request;
      state.deleteSignature.response = initialState.deleteSignature.response;
      state.deleteSignature.failed = initialState.deleteSignature.failed;



      state.allSignatureByBrFrIDOrCompanyID.request = initialState.allSignatureByBrFrIDOrCompanyID.request;
      state.allSignatureByBrFrIDOrCompanyID.response = initialState.allSignatureByBrFrIDOrCompanyID.response;
      state.allSignatureByBrFrIDOrCompanyID.failed = initialState.allSignatureByBrFrIDOrCompanyID.failed;

    },
    requestAllSignatureByBrFrIDOrCompanyID: (state) => {
      state.allSignatureByBrFrIDOrCompanyID.request = true;
    },
    responseAllSignatureByBrFrIDOrCompanyID: (state, action) => {

      state.allSignatureByBrFrIDOrCompanyID.response = true;
      state.allSignatureByBrFrIDOrCompanyID.data = action?.payload;
    },
    failedAllSignatureByBrFrIDOrCompanyID: (state, action) => {
      state.allSignatureByBrFrIDOrCompanyID.failed = true;
      state.allSignatureByBrFrIDOrCompanyID.error = action?.payload;
    },
    requestCreateSignature: (state) => {
      state.createSignature.request = true;
    },
    responseCreateSignature: (state, action) => {

      state.createSignature.response = true;
      state.createSignature.data = action?.payload;
    },
    failedCreateSignature: (state, action) => {

      state.createSignature.failed = true;
      state.createSignature.error = action?.payload;
    },
    requestDeleteSignature: (state) => {

      state.deleteSignature.request = true;
    },
    responseDeleteSignature: (state, action) => {

      state.deleteSignature.response = true;
      state.deleteSignature.data = action?.payload;
    },
    failedDeleteSignature: (state, action) => {

      state.deleteSignature.failed = true;
      state.deleteSignature.error = action?.payload;
    },
    requestUpdateSignature: (state) => {

      state.updateSignature.request = true;
    },
    responseUpdateSignature: (state, action) => {

      state.updateSignature.response = true;
      state.updateSignature.data = action?.payload;
    },
    failedUpdateSignature: (state, action) => {

      state.updateSignature.failed = true;
      state.updateSignature.error = action?.payload;
    },
    
    
  },
});
export default SignatureSlice.reducer;
export const {

  failedAllSignatureByBrFrIDOrCompanyID,
  failedCreateSignature,
  failedDeleteSignature,
  failedUpdateSignature,
  requestAllSignatureByBrFrIDOrCompanyID,
  requestCreateSignature,
  responseCreateSignature,
  requestDeleteSignature,
  requestUpdateSignature,
  resetSignature,
  responseAllSignatureByBrFrIDOrCompanyID,
  responseDeleteSignature,
  responseUpdateSignature,
} = SignatureSlice.actions;
