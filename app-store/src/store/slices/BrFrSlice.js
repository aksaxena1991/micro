import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  createBrFr: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  updateBrFr: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  deleteBrFr: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  allBrFrByCompanyId: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },

};
export const BrFrSlice = createSlice({
  name: "brFr",
  initialState,
  reducers: {
    resetBrFr: (state) => {
      state.createBrFr.request = initialState.createBrFr.request;
      state.createBrFr.response = initialState.createBrFr.response;
      state.createBrFr.failed = initialState.createBrFr.failed;

      state.updateBrFr.request = initialState.updateBrFr.request;
      state.updateBrFr.response = initialState.updateBrFr.response;
      state.updateBrFr.failed = initialState.updateBrFr.failed;

      state.deleteBrFr.request = initialState.deleteBrFr.request;
      state.deleteBrFr.response = initialState.deleteBrFr.response;
      state.deleteBrFr.failed = initialState.deleteBrFr.failed;

      state.allBrFrByCompanyId.request = initialState.allBrFrByCompanyId.request;
      state.allBrFrByCompanyId.response = initialState.allBrFrByCompanyId.response;
      state.allBrFrByCompanyId.failed = initialState.allBrFrByCompanyId.failed;
    },
    requestAllBrFrByCompanyId: (state) => {
      state.allBrFrByCompanyId.request = true
    },
    responseAllBrFrByCompanyId: (state, action) => {
      state.allBrFrByCompanyId.response = true;
      state.allBrFrByCompanyId.data = action.payload;
    },
    failedAllBrFrByCompanyId: (state, action) => {
      state.allBrFrByCompanyId.failed = true;
      state.allBrFrByCompanyId.error = action.payload;
    },
    requestCreateBrFr: (state) => {
      state.createBrFr.request = true;
    },
    responseCreateBrFr: (state, action) => {
      state.createBrFr.response = true;
      state.createBrFr.data = action.payload;
    },
    failedCreateBrFr: (state, action) => {
      state.createBrFr.failed = true;
      state.createBrFr.error = action.payload;
    },
    requestDeleteBrFr: (state) => {
      state.deleteBrFr.request = true;
    },
    responseDeleteBrFr: (state, action) => {
      state.deleteBrFr.response = true;
      state.deleteBrFr.data = action.payload;
    },
    failedDeleteBrFr: (state, action) => {
      state.deleteBrFr.failed = true;
      state.deleteBrFr.error = action.payload;
    },
    requestUpdateBrFr: (state) => {
      state.updateBrFr.request = true;
    },
    responseUpdateBrFr: (state, action) => {
      state.updateBrFr.response = true;
      state.updateBrFr.data = action.payload;
    },
    failedUpdateBrFr: (state, action) => {
      state.updateBrFr.failed = true;
      state.updateBrFr.error = action.payload;
    },
  },
});
export default BrFrSlice.reducer;
export const {
  failedAllBrFrByCompanyId,
  failedCreateBrFr,
  failedDeleteBrFr,
  failedUpdateBrFr,
  requestAllBrFrByCompanyId,
  requestCreateBrFr,
  responseCreateBrFr,
  requestDeleteBrFr,
  requestUpdateBrFr,
  resetBrFr,
  responseAllBrFrByCompanyId,
  responseDeleteBrFr,
  responseUpdateBrFr,
} = BrFrSlice.actions;
