import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedEnquiry: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  createEnquiry: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  deleteEnquiry: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  updateEnquiry: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  allEnquiryByBrFrIDOrCompanyID: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },
};
export const EnquirySlice = createSlice({
  name: "enquiry",
  initialState,
  reducers: {
    resetEnquiry: (state) => {
      state.createEnquiry.request = initialState.createEnquiry.request;
      state.createEnquiry.response = initialState.createEnquiry.response;
      state.createEnquiry.failed = initialState.createEnquiry.failed;

      state.deleteEnquiry.request = initialState.deleteEnquiry.request;
      state.deleteEnquiry.response = initialState.deleteEnquiry.response;
      state.deleteEnquiry.failed = initialState.deleteEnquiry.failed;

      state.updateEnquiry.request = initialState.updateEnquiry.request;
      state.updateEnquiry.response = initialState.updateEnquiry.response;
      state.updateEnquiry.failed = initialState.updateEnquiry.failed;

      state.allEnquiryByBrFrIDOrCompanyID.request =
        initialState.allEnquiryByBrFrIDOrCompanyID.request;
      state.allEnquiryByBrFrIDOrCompanyID.response =
        initialState.allEnquiryByBrFrIDOrCompanyID.response;
      state.allEnquiryByBrFrIDOrCompanyID.failed =
        initialState.allEnquiryByBrFrIDOrCompanyID.failed;

      state.selectedEnquiry.request = initialState.selectedEnquiry.request;
      state.selectedEnquiry.response = initialState.selectedEnquiry.response;
      state.selectedEnquiry.failed = initialState.selectedEnquiry.failed;
    },
    requestSelectedEnquiry: (state) => {
      state.selectedEnquiry.request = true;
    },
    responseSelectedEnquiry: (state, action) => {
      state.selectedEnquiry.response = true;
      state.selectedEnquiry.data = action?.payload;
    },
    failedSelectedEnquiry: (state, action) => {
      state.selectedEnquiry.failed = true;
      state.selectedEnquiry.error = action?.payload;
    },

    requestCreateEnquiry: (state) => {
      state.createEnquiry.request = true;
    },
    responseCreateEnquiry: (state, action) => {
      state.createEnquiry.response = true;
      state.createEnquiry.data = action?.payload;
    },
    failedCreateEnquiry: (state, action) => {
      state.createEnquiry.failed = true;
      state.createEnquiry.error = action?.payload;
    },

    requestAllEnquiryByBrFrIDOrCompanyID: (state) => {
      state.allEnquiryByBrFrIDOrCompanyID.request = true;
    },
    responseAllEnquiryByBrFrIDOrCompanyID: (state, action) => {
      state.allEnquiryByBrFrIDOrCompanyID.response = true;
      state.allEnquiryByBrFrIDOrCompanyID.data = action?.payload;
    },
    failedAllEnquiryByBrFrIDOrCompanyID: (state, action) => {
      state.allEnquiryByBrFrIDOrCompanyID.failed = true;
      state.allEnquiryByBrFrIDOrCompanyID.error = action?.payload;
    },
    responseDeleteEnquiry: (state, action) => {
      state.deleteEnquiry.response = true;
      state.deleteEnquiry.data = action?.payload;
    },
    failedDeleteEnquiry: (state, action) => {
      state.deleteEnquiry.failed = true;
      state.deleteEnquiry.error = action?.payload;
    },
    responseUpdateEnquiry: (state, action) => {
      state.updateEnquiry.response = true;
      state.updateEnquiry.data = action?.payload;
    },
    failedUpdateEnquiry: (state, action) => {
      state.updateEnquiry.failed = true;
      state.updateEnquiry.error = action?.payload;
    },
    requestDeleteEnquiry: (state) => {
      state.deleteEnquiry.request = true;
    },
    requestUpdateEnquiry: (state) => {
      state.updateEnquiry.request = true;
    },
  },
});
export default EnquirySlice.reducer;
export const {
  resetEnquiry,
  requestAllEnquiryByBrFrIDOrCompanyID,
  responseAllEnquiryByBrFrIDOrCompanyID,
  failedAllEnquiryByBrFrIDOrCompanyID,
  requestDeleteEnquiry,
  requestUpdateEnquiry,
  failedUpdateEnquiry,
  responseUpdateEnquiry,
  failedDeleteEnquiry,
  responseDeleteEnquiry,
  failedAllEnquiry,
  failedCreateEnquiry,
  requestAllEnquiry,
  requestCreateEnquiry,
  responseAllEnquiry,
  responseCreateEnquiry,
  requestSelectedEnquiry,
  responseSelectedEnquiry,
  failedSelectedEnquiry,
} = EnquirySlice.actions;
