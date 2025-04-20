import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allSetSurveyByEOCID: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },

  createSetSurvey: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  updateSetSurvey: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  deleteSetSurvey: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },



};
export const SetSurveySlice = createSlice({
  name: "setsurvey",
  initialState,
  reducers: {
    resetSetSurvey: (state) => {
      state.allSetSurveyByEOCID.request = initialState.allSetSurveyByEOCID.request;
      state.allSetSurveyByEOCID.response = initialState.allSetSurveyByEOCID.response;
      state.allSetSurveyByEOCID.failed = initialState.allSetSurveyByEOCID.failed;

      state.createSetSurvey.request = initialState.createSetSurvey.request;
      state.createSetSurvey.response = initialState.createSetSurvey.response;
      state.createSetSurvey.failed = initialState.createSetSurvey.failed;

      state.updateSetSurvey.request = initialState.updateSetSurvey.request;
      state.updateSetSurvey.response = initialState.updateSetSurvey.response;
      state.updateSetSurvey.failed = initialState.updateSetSurvey.failed;

      state.deleteSetSurvey.request = initialState.deleteSetSurvey.request;
      state.deleteSetSurvey.response = initialState.deleteSetSurvey.response;
      state.deleteSetSurvey.failed = initialState.deleteSetSurvey.failed;
    },
    requestCreateSetSurvey: (state) => {

      state.createSetSurvey.request = true
    },
    responseCreateSetSurvey: (state, action) => {

      state.createSetSurvey.response = true
      state.createSetSurvey.data = action?.payload;
    },
    failedCreateSetSurvey: (state, action) => {

      state.createSetSurvey.failed = true
      state.createSetSurvey.error = action?.payload;
    },
    requestAllSetSurveyByEOCID: (state) => {

      state.allSetSurveyByEOCID.request = true
    },
    responseAllSetSurveyByEOCID: (state, action) => {

      state.allSetSurveyByEOCID.response = true
      state.allSetSurveyByEOCID.data = action?.payload;
    },
    failedAllSetSurveyByEOCID: (state, action) => {

      state.allSetSurveyByEOCID.failed = true
      state.allSetSurveyByEOCID.error = action?.payload;
    },
    responseDeleteSetSurvey: (state, action) => {

      state.deleteSetSurvey.response = true
      state.deleteSetSurvey.data = action?.payload;

    },
    failedDeleteSetSurvey: (state, action) => {

      state.deleteSetSurvey.failed = true
      state.deleteSetSurvey.error = action?.payload;
    },
    responseUpdateSetSurvey: (state, action) => {

      state.updateSetSurvey.response = true;
      state.updateSetSurvey.data = action?.payload;

    },
    failedUpdateSetSurvey: (state, action) => {

      state.updateSetSurvey.failed = true;
      state.updateSetSurvey.error = action?.payload;
    },
    requestDeleteSetSurvey: (state) => {

      state.deleteSetSurvey.request = true;
    },
    requestUpdateSetSurvey: (state) => {

      state.updateSetSurvey.request = true;

    }

  },
});
export default SetSurveySlice.reducer;
export const {
  resetSetSurvey,
  requestDeleteSetSurvey,
  requestUpdateSetSurvey,
  failedUpdateSetSurvey,
  responseUpdateSetSurvey,
  failedDeleteSetSurvey,
  responseDeleteSetSurvey,
  failedAllSetSurveyByEOCID,
  failedCreateSetSurvey,
  requestAllSetSurveyByEOCID,
  requestCreateSetSurvey,
  responseAllSetSurveyByEOCID,
  responseCreateSetSurvey
} = SetSurveySlice.actions;
