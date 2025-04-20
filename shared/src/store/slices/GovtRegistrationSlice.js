import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allGovtRegistrationByCompanyIDOrBrFrID: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },
  createGovtRegistration: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  updateGovtRegistration: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  deleteGovtRegistration: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
};
export const GovtRegistrationSlice = createSlice({
  name: "govtRegistration",
  initialState,
  reducers: {
    resetGovtRegistration: (state) => {
      state.allGovtRegistrationByCompanyIDOrBrFrID.request = initialState.allGovtRegistrationByCompanyIDOrBrFrID.request;
      state.allGovtRegistrationByCompanyIDOrBrFrID.response = initialState.allGovtRegistrationByCompanyIDOrBrFrID.response;
      state.allGovtRegistrationByCompanyIDOrBrFrID.failed = initialState.allGovtRegistrationByCompanyIDOrBrFrID.failed;

      state.createGovtRegistration.request = initialState.createGovtRegistration.request;
      state.createGovtRegistration.response = initialState.createGovtRegistration.response;
      state.createGovtRegistration.failed = initialState.createGovtRegistration.failed;

      state.updateGovtRegistration.request = initialState.updateGovtRegistration.request;
      state.updateGovtRegistration.response = initialState.updateGovtRegistration.response;
      state.updateGovtRegistration.failed = initialState.updateGovtRegistration.failed;

      state.deleteGovtRegistration.request = initialState.deleteGovtRegistration.request;
      state.deleteGovtRegistration.response = initialState.deleteGovtRegistration.response;
      state.deleteGovtRegistration.failed = initialState.deleteGovtRegistration.failed;
    },
    requestCreateGovtRegistration: (state) => {

      state.createGovtRegistration.request = true;
    },
    responseCreateGovtRegistration: (state, action) => {
      state.createGovtRegistration.response = true;
      state.createGovtRegistration.data = action?.payload;
    },
    failedCreateGovtRegistration: (state, action) => {
      state.createGovtRegistration.failed = true;
      state.createGovtRegistration.error = action?.payload;
    },
    requestAllGovtRegistrationByCompanyIDOrBrFrID: (state) => {

      state.allGovtRegistrationByCompanyIDOrBrFrID.request = true;
    },
    responseAllGovtRegistrationByCompanyIDOrBrFrID: (state, action) => {

      state.allGovtRegistrationByCompanyIDOrBrFrID.response = true;
      state.allGovtRegistrationByCompanyIDOrBrFrID.data = action?.payload;
    },
    failedAllGovtRegistrationByCompanyIDOrBrFrID: (state, action) => {

      state.allGovtRegistrationByCompanyIDOrBrFrID.failed = true;
      state.allGovtRegistrationByCompanyIDOrBrFrID.error = action?.payload;
    },



    responseDeleteGovtRegistration: (state, action) => {

      state.deleteGovtRegistration.response = true;
      state.deleteGovtRegistration.data = action?.payload;
    },
    failedDeleteGovtRegistration: (state, action) => {

      state.deleteGovtRegistration.failed = true;
      state.deleteGovtRegistration.error = action?.payload;
    },
    responseUpdateGovtRegistration: (state, action) => {

      state.updateGovtRegistration.response = true;
      state.updateGovtRegistration.data = action?.payload;

    },
    failedUpdateGovtRegistration: (state, action) => {

      state.updateGovtRegistration.failed = true;
      state.updateGovtRegistration.error = action?.payload;
    },
    requestDeleteGovtRegistration: (state) => {

      state.deleteGovtRegistration.request = true;
    },
    requestUpdateGovtRegistration: (state) => {

      state.updateGovtRegistration.request = true;
    }

  },
});
export default GovtRegistrationSlice.reducer;
export const {
  resetGovtRegistration,
  requestDeleteGovtRegistration,
  requestUpdateGovtRegistration,
  failedUpdateGovtRegistration,
  responseUpdateGovtRegistration,
  failedDeleteGovtRegistration,
  responseDeleteGovtRegistration,
  failedAllGovtRegistrationByCompanyIDOrBrFrID,
  responseAllGovtRegistrationByCompanyIDOrBrFrID,
  requestAllGovtRegistrationByCompanyIDOrBrFrID,
  failedCreateGovtRegistration,
  requestCreateGovtRegistration,
  responseCreateGovtRegistration
} = GovtRegistrationSlice.actions;
