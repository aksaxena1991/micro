import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  registerCompany: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  updateCompany: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  currentCompany: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  
};
export const CompanySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    resetCompany: (state) => {
      state.currentCompany.request = initialState.currentCompany.request;
      state.currentCompany.response = initialState.currentCompany.response;
      state.currentCompany.failed = initialState.currentCompany.failed;

      state.registerCompany.request = initialState.registerCompany.request;
      state.registerCompany.response = initialState.registerCompany.response;
      state.registerCompany.failed = initialState.registerCompany.failed;

      state.updateCompany.request = initialState.updateCompany.request;
      state.updateCompany.response = initialState.updateCompany.response;
      state.updateCompany.failed = initialState.updateCompany.failed;
    },
    requestRegisterCompany: (state) => {
      state.registerCompany.request = true;
    },

    responseRegisterCompany: (state, action) => {
      state.registerCompany.data = action?.payload;
      state.registerCompany.response = true;
    },
    failedRegisterCompany: (state, action) => {
      state.registerCompany.failed = true;
      state.registerCompany.error = action?.payload;
    },

    
    requestCurrentCompany: (state) => {
      state.currentCompany.request = true;
    },
    responseCurrentCompany: (state, action) => {
      state.currentCompany.data = action?.payload;
      state.currentCompany.response = true;
    },
    failedCurrentCompany: (state, action) => {
      state.currentCompany.failed = true;
      state.currentCompany.error = action?.payload;
    },
    responseUpdateCompany: (state, action) => {
      state.updateCompany.response = true;
      state.updateCompany.data = action?.payload;
    },
    failedUpdateCompany: (state, action) => {
      state.updateCompany.failed = true;
      state.updateCompany.error = action?.payload;
    },
    requestUpdateCompany: (state) => {
      state.updateCompany.request = true;
    },

    requestGetCompanyByID: (state) => {
      state.currentCompany.request = true;
    },
    responseGetCompanyByID: (state, action) => {
      state.currentCompany.data = action?.payload;
      state.currentCompany.response = true;
    },
    failedGetCompanyByID: (state, action) => {
      state.currentCompany.failed = true;
      state.currentCompany.error = action?.payload;
    },
  },
});
export default CompanySlice.reducer;
export const {
  failedGetCompanyByID,
  responseGetCompanyByID,
  requestGetCompanyByID,
  requestCurrentCompany,
  failedUpdateCompany,
  requestUpdateCompany,
  responseUpdateCompany,
  failedRegisterCompany,
  requestRegisterCompany,
  responseRegisterCompany,
  resetCompany,
  failedCurrentCompany,
  
  responseCurrentCompany,
} = CompanySlice.actions;
