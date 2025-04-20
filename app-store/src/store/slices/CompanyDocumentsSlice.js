import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allCompanyDocumentByCompanyId: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },
  createCompanyDocument: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  updateCompanyDocument: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  deleteCompanyDocument: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
};
export const CompanyDocumentSlice = createSlice({
  name: "companyDocument",
  initialState,
  reducers: {
    resetCompanyDocument: (state) => {
      state.createCompanyDocument.request =
        initialState.createCompanyDocument.request;
      state.createCompanyDocument.response =
        initialState.createCompanyDocument.response;
      state.createCompanyDocument.failed =
        initialState.createCompanyDocument.failed;

      state.updateCompanyDocument.request =
        initialState.updateCompanyDocument.request;
      state.updateCompanyDocument.response =
        initialState.updateCompanyDocument.response;
      state.updateCompanyDocument.failed =
        initialState.updateCompanyDocument.failed;

      state.deleteCompanyDocument.request =
        initialState.deleteCompanyDocument.request;
      state.deleteCompanyDocument.response =
        initialState.deleteCompanyDocument.response;
      state.deleteCompanyDocument.failed =
        initialState.deleteCompanyDocument.failed;

      state.allCompanyDocumentByCompanyId.request =
        initialState.allCompanyDocumentByCompanyId.request;
      state.allCompanyDocumentByCompanyId.response =
        initialState.allCompanyDocumentByCompanyId.response;
      state.allCompanyDocumentByCompanyId.failed =
        initialState.allCompanyDocumentByCompanyId.failed;
    },
    requestCreateCompanyDocument: (state) => {
      state.createCompanyDocument.request = true;
    },
    responseCreateCompanyDocument: (state, action) => {
      state.createCompanyDocument.response = true;
      state.createCompanyDocument.data = action?.payload;
    },
    failedCreateCompanyDocument: (state, action) => {
      state.createCompanyDocument.failed = true;
      state.createCompanyDocument.error = action?.payload;
    },

    requestAllCompanyDocumentByCompanyID: (state) => {
      state.allCompanyDocumentByCompanyId.request = true;
    },
    responseAllCompanyDocumentByCompanyID: (state, action) => {
      state.allCompanyDocumentByCompanyId.response = true;
      state.allCompanyDocumentByCompanyId.data = action?.payload;
    },
    failedAllCompanyDocumentByCompanyID: (state, action) => {
      state.allCompanyDocumentByCompanyId.failed = true;
      state.allCompanyDocumentByCompanyId.error = action?.payload;
    },
    responseDeleteCompanyDocument: (state, action) => {
      state.deleteCompanyDocument.response = true;
      state.deleteCompanyDocument.data = action?.payload;
    },
    failedDeleteCompanyDocument: (state, action) => {
      state.deleteCompanyDocument.failed = true;
      state.deleteCompanyDocument.error = action?.payload;
    },
    responseUpdateCompanyDocument: (state, action) => {
      state.updateCompanyDocument.response = true;
      state.updateCompanyDocument.data = action?.payload;
    },
    failedCompanyDocument: (state, action) => {
      state.updateCompanyDocument.failed = true;
      state.updateCompanyDocument.error = action?.payload;
    },
    requestDeleteCompanyDocument: (state) => {
      state.deleteCompanyDocument.request = true;
    },
    requestUpdateCompanyDocument: (state) => {
      state.updateCompanyDocument.request = true;
    },
  },
});
export default CompanyDocumentSlice.reducer;
export const {
  requestAllCompanyDocumentByCompanyID,
  responseAllCompanyDocumentByCompanyID,
  failedAllCompanyDocumentByCompanyID,
  resetCompanyDocument,
  requestDeleteCompanyDocument,
  requestUpdateCompanyDocument,
  failedCompanyDocument,
  responseUpdateCompanyDocument,
  failedDeleteCompanyDocument,
  responseDeleteCompanyDocument,
  failedAllCompanyDocument,
  failedCreateCompanyDocument,
  requestAllCompanyDocument,
  requestCreateCompanyDocument,
  responseAllCompanyDocument,
  responseCreateCompanyDocument,
} = CompanyDocumentSlice.actions;
