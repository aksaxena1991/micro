import { createSlice } from "@reduxjs/toolkit";
const initialState = {

  allFollowUpsByEOCID: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },
  createFollowUp: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  updateFollowUp: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  deleteFollowUp: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },




};
export const FollowUpsSlice = createSlice({
  name: "followups",
  initialState,
  reducers: {
    resetFollowUp: (state) => {
      state.allFollowUpsByEOCID.request = initialState.allFollowUpsByEOCID.request;
      state.allFollowUpsByEOCID.response = initialState.allFollowUpsByEOCID.response;
      state.allFollowUpsByEOCID.failed = initialState.allFollowUpsByEOCID.failed;

      state.createFollowUp.request = initialState.createFollowUp.request;
      state.createFollowUp.response = initialState.createFollowUp.response;
      state.createFollowUp.failed = initialState.createFollowUp.failed;

      state.updateFollowUp.request = initialState.updateFollowUp.request;
      state.updateFollowUp.response = initialState.updateFollowUp.response;
      state.updateFollowUp.failed = initialState.updateFollowUp.failed;

      state.deleteFollowUp.request = initialState.deleteFollowUp.request;
      state.deleteFollowUp.response = initialState.deleteFollowUp.response;
      state.deleteFollowUp.failed = initialState.deleteFollowUp.failed;
    },
    requestCreateFollowUp: (state) => {

      state.createFollowUp.request = true;
    },
    responseCreateFollowUp: (state, action) => {

      state.createFollowUp.response = true;
      state.createFollowUp.data = action?.payload;
    },
    failedCreateFollowUp: (state, action) => {

      state.createFollowUp.failed = true;
      state.createFollowUp.error = action?.payload;
    },
    requestAllFollowUpsByEOCID: (state) => {

      state.allFollowUpsByEOCID.request = true;
    },
    responseAllFollowUpsByEOCID: (state, action) => {

      state.allFollowUpsByEOCID.response = true;
      state.allFollowUpsByEOCID.data = action?.payload;
    },
    failedAllFollowUpsByEOCID: (state, action) => {

      state.allFollowUpsByEOCID.failed = true;
      state.allFollowUpsByEOCID.error = action?.payload;
    },
    responseDeleteFollowUp: (state, action) => {

      state.deleteFollowUp.response = true;
      state.deleteFollowUp.data = action?.payload;

    },
    failedDeleteFollowUp: (state, action) => {

      state.deleteFollowUp.failed = true;
    },
    responseUpdateFollowUp: (state, action) => {

      state.updateFollowUp.response = true;
      state.updateFollowUp.data = action?.payload;

    },
    failedUpdateFollowUp: (state, action) => {

      state.updateFollowUp.failed = true;
      state.updateFollowUp.error = action?.payload;
    },
    requestDeleteFollowUp: (state) => {

      state.deleteFollowUp.request = true;
    },
    requestUpdateFollowUp: (state) => {

      state.updateFollowUp.request = true;
    }

  },
});
export default FollowUpsSlice.reducer;
export const {
  resetFollowUp,
  requestDeleteFollowUp,
  requestUpdateFollowUp,
  failedUpdateFollowUp,
  responseUpdateFollowUp,
  failedDeleteFollowUp,
  responseDeleteFollowUp,
  failedAllFollowUpsByEOCID,
  failedCreateFollowUp,
  requestAllFollowUpsByEOCID,
  requestCreateFollowUp,
  responseAllFollowUpsByEOCID,
  responseCreateFollowUp
} = FollowUpsSlice.actions;
