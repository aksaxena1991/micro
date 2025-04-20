import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allDocumentFooterContentByCompanyId: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },
  createDocumentFooterContent: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  deleteDocumentFooterContent: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  updateDocumentFooterContent: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
};
export const DocumentFooterContentSlice = createSlice({
  name: "documentFooterContent",
  initialState,
  reducers: {
    resetDocumentFooterContent: (state) => {
      state.allDocumentFooterContentByCompanyId.request =
        initialState.allDocumentFooterContentByCompanyId.request;
      state.allDocumentFooterContentByCompanyId.response =
        initialState.allDocumentFooterContentByCompanyId.response;
      state.allDocumentFooterContentByCompanyId.failed =
        initialState.allDocumentFooterContentByCompanyId.failed;

      state.createDocumentFooterContent.request =
        initialState.createDocumentFooterContent.request;
      state.createDocumentFooterContent.response =
        initialState.createDocumentFooterContent.response;
      state.createDocumentFooterContent.failed = initialState.createDocumentFooterContent.failed;

      state.deleteDocumentFooterContent.request =
        initialState.deleteDocumentFooterContent.request;
      state.deleteDocumentFooterContent.response =
        initialState.deleteDocumentFooterContent.response;

      state.updateDocumentFooterContent.request =
        initialState.updateDocumentFooterContent.request;
      state.updateDocumentFooterContent.response =
        initialState.updateDocumentFooterContent.response;
    },
    requestCreateDocumentFooterContent: (state) => {
      state.createDocumentFooterContent.request = true;
    },
    responseCreateDocumentFooterContent: (state, action) => {
      state.createDocumentFooterContent.response = true;
      state.createDocumentFooterContent.data = action?.payload;
    },
    failedCreateDocumentFooterContent: (state, action) => {
      state.createDocumentFooterContent.failed = true;
      state.createDocumentFooterContent.error = action?.payload;
    },
    requestAllDocumentFooterContentByCompanyID: (state) => {
      state.allDocumentFooterContentByCompanyId.request = true;
    },
    responseAllDocumentFooterContentByCompanyID: (state, action) => {
      state.allDocumentFooterContentByCompanyId.response = true;
      state.allDocumentFooterContentByCompanyId.data = action?.payload;
    },
    failedAllDocumentFooterContentByCompanyID: (state, action) => {
      state.allDocumentFooterContentByCompanyId.failed = true;
      state.allDocumentFooterContentByCompanyId.error = action?.payload;
    },
    responseDeleteDocumentFooterContent: (state, action) => {
      state.deleteDocumentFooterContent.response = true;
      state.deleteDocumentFooterContent.data = action?.payload;
    },
    failedDeleteDocumentFooterContent: (state, action) => {
      state.deleteDocumentFooterContent.failed = true;
      state.deleteDocumentFooterContent.error = action?.payload;
    },
    responseUpdateDocumentFooterContent: (state, action) => {
      state.updateDocumentFooterContent.response = true;
      state.updateDocumentFooterContent.data = action?.payload;
    },
    failedUpdateDocumentFooterContent: (state, action) => {
      state.updateDocumentFooterContent.failed = true;
      state.updateDocumentFooterContent.error = action?.payload;
    },
    requestDeleteDocumentFooterContent: (state) => {
      state.deleteDocumentFooterContent.request = true;
    },
    requestUpdateDocumentFooterContent: (state) => {
      state.updateDocumentFooterContent.request = true;
    },
  },
});
export default DocumentFooterContentSlice.reducer;
export const {
  requestAllDocumentFooterContentByCompanyID,
  responseAllDocumentFooterContentByCompanyID,
  failedAllDocumentFooterContentByCompanyID,
  resetDocumentFooterContent,
  requestDeleteDocumentFooterContent,
  requestUpdateDocumentFooterContent,
  failedUpdateDocumentFooterContent,
  responseUpdateDocumentFooterContent,
  failedDeleteDocumentFooterContent,
  responseDeleteDocumentFooterContent,
  failedAllDocumentFooterContent,
  failedCreateDocumentFooterContent,
  requestAllDocumentFooterContent,
  requestCreateDocumentFooterContent,
  responseAllDocumentFooterContent,
  responseCreateDocumentFooterContent,
} = DocumentFooterContentSlice.actions;
