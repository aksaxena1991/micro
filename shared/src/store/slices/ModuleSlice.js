import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  createModule: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  deleteModule: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  updateModule: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  allModule: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },
  allSubModule: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },
};
export const ModuleSlice = createSlice({
  name: "module",
  initialState,
  reducers: {
    resetModule: (state) => {
      state.createModule.request = initialState.createModule.request;
      state.createModule.response = initialState.createModule.response;
      state.createModule.failed = initialState.createModule.failed;

      state.updateModule.request = initialState.updateModule.request;
      state.updateModule.response = initialState.updateModule.response;
      state.updateModule.failed = initialState.updateModule.failed;

      state.deleteModule.request = initialState.deleteModule.request;
      state.deleteModule.response = initialState.deleteModule.response;
      state.deleteModule.failed = initialState.deleteModule.failed;

      state.allModule.request = initialState.allModule.request;
      state.allModule.response = initialState.allModule.response;
      state.allModule.failed = initialState.allModule.failed;

      state.allSubModule.request = initialState.allSubModule.request;
      state.allSubModule.response = initialState.allSubModule.response;
      state.allSubModule.failed = initialState.allSubModule.failed;
    },
    requestAllSubModule: (state) => {
      state.allModule.request = true;
    },
    responseAllSubModule: (state, action) => {
      state.allSubModule.response = true;
      state.allSubModule.data = action.payload;
    },
    failedAllSubModule: (state, action) => {
      state.allSubModule.failed = true;
      state.allSubModule.error = action.payload;
    },
    requestAllModule: (state) => {
      state.allModule.request = true;
    },
    responseAllModule: (state, action) => {
      state.allModule.response = true;
      state.allModule.data = action.payload;
    },
    failedAllModule: (state, action) => {
      state.allModule.failed = true;
      state.allModule.error = action.payload;
    },
    requestCreateModule: (state) => {
      state.createModule.request = true;
    },
    responseCreateModule: (state, action) => {
      state.createModule.response = true;
      state.createModule.data = action.payload;
    },
    failedCreateModule: (state, action) => {
      state.createModule.failed = true;
      state.createModule.error = action.payload;
    },
    requestDeleteModule: (state) => {
      state.deleteModule.request = true;
    },
    responseDeleteModule: (state, action) => {
      state.deleteModule.response = true;
      state.deleteModule.data = action.payload;
    },
    failedDeleteModule: (state, action) => {
      state.deleteModule.failed = true;
      state.deleteModule.error = action.payload;
    },
    requestUpdateModule: (state) => {
      state.updateModule.request = true;
    },
    responseUpdateModule: (state, action) => {
      state.updateModule.response = true;
      state.updateModule.data = action.payload;
    },
    failedUpdateModule: (state, action) => {
      state.updateModule.failed = true;
      state.updateModule.error = action.payload;
    },
  },
});
export default ModuleSlice.reducer;
export const {
  resetModule,
  requestAllModule,
  failedAllModule,
  responseAllModule,
  failedCreateModule,
  requestCreateModule,
  responseCreateModule,
  failedDeleteModule,
  requestDeleteModule,
  responseDeleteModule,
  failedUpdateModule,
  requestUpdateModule,
  responseUpdateModule,
  failedAllSubModule,
  requestAllSubModule,
  responseAllSubModule,
} = ModuleSlice.actions;
