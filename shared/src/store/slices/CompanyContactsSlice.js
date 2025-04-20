import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allCompanyContactByCompanyId: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },
  createCompanyContact: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  updateCompanyContact: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  deleteCompanyContact: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
};
export const CompanyContactSlice = createSlice({
  name: "companyContact",
  initialState,
  reducers: {
    resetCompanyContact: (state) => {
      state.createCompanyContact.request =
        initialState.createCompanyContact.request;
      state.createCompanyContact.response =
        initialState.createCompanyContact.response;
      state.createCompanyContact.failed =
        initialState.createCompanyContact.failed;

      state.updateCompanyContact.request =
        initialState.updateCompanyContact.request;
      state.updateCompanyContact.response =
        initialState.updateCompanyContact.response;
      state.updateCompanyContact.failed =
        initialState.updateCompanyContact.failed;

      state.deleteCompanyContact.request =
        initialState.deleteCompanyContact.request;
      state.deleteCompanyContact.response =
        initialState.deleteCompanyContact.response;
      state.deleteCompanyContact.failed =
        initialState.deleteCompanyContact.failed;

      state.allCompanyContactByCompanyId.request =
        initialState.allCompanyContactByCompanyId.request;
      state.allCompanyContactByCompanyId.response =
        initialState.allCompanyContactByCompanyId.response;
      state.allCompanyContactByCompanyId.failed =
        initialState.allCompanyContactByCompanyId.failed;
    },
    requestCreateCompanyContact: (state) => {
      state.createCompanyContact.request = true;
    },
    responseCreateCompanyContact: (state, action) => {
      state.createCompanyContact.response = true;
      state.createCompanyContact.data = action?.payload;
    },
    failedCreateCompanyContact: (state, action) => {
      state.createCompanyContact.failed = true;
      state.createCompanyContact.error = action?.payload;
    },

    requestAllCompanyContactByCompanyID: (state) => {
      state.allCompanyContactByCompanyId.request = true;
    },
    responseAllCompanyContactByCompanyID: (state, action) => {
      state.allCompanyContactByCompanyId.response = true;
      state.allCompanyContactByCompanyId.data = action?.payload;
    },
    failedAllCompanyContactByCompanyID: (state, action) => {
      state.allCompanyContactByCompanyId.failed = true;
      state.allCompanyContactByCompanyId.error = action?.payload;
    },
    responseDeleteCompanyContact: (state, action) => {
      state.deleteCompanyContact.response = true;
      state.deleteCompanyContact.data = action?.payload;
    },
    failedDeleteCompanyContact: (state, action) => {
      state.deleteCompanyContact.failed = true;
      state.deleteCompanyContact.error = action?.payload;
    },
    responseUpdateCompanyContact: (state, action) => {
      state.updateCompanyContact.response = true;
      state.updateCompanyContact.data = action?.payload;
    },
    failedCompanyContact: (state, action) => {
      state.updateCompanyContact.failed = true;
      state.updateCompanyContact.error = action?.payload;
    },
    requestDeleteCompanyContact: (state) => {
      state.deleteCompanyContact.request = true;
    },
    requestUpdateCompanyContact: (state) => {
      state.updateCompanyContact.request = true;
    },
  },
});
export default CompanyContactSlice.reducer;
export const {
  requestAllCompanyContactByCompanyID,
  responseAllCompanyContactByCompanyID,
  failedAllCompanyContactByCompanyID,
  resetCompanyContact,
  requestDeleteCompanyContact,
  requestUpdateCompanyContact,
  failedCompanyContact,
  responseUpdateCompanyContact,
  failedDeleteCompanyContact,
  responseDeleteCompanyContact,
  failedAllCompanyContact,
  failedCreateCompanyContact,
  requestAllCompanyContact,
  requestCreateCompanyContact,
  responseAllCompanyContact,
  responseCreateCompanyContact,
} = CompanyContactSlice.actions;
