import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  updateTemplate: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  createTemplate: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  deleteTemplate: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  allTemplate: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },
  
};
export const TemplateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    resetTemplate: (state) => {
      

      state.allTemplate.request =
        initialState.allTemplate.request;
      state.allTemplate.response =
        initialState.allTemplate.response;
      state.allTemplate.failed =
        initialState.allTemplate.failed;

      state.createTemplate.request =
        initialState.createTemplate.request;
      state.createTemplate.response =
        initialState.createTemplate.response;
      state.createTemplate.failed = initialState.createTemplate.failed;

      state.updateTemplate.request =
        initialState.updateTemplate.request;
      state.updateTemplate.response =
        initialState.updateTemplate.response;
      state.updateTemplate.failed = initialState.updateTemplate.failed;

      state.deleteTemplate.request =
        initialState.deleteTemplate.request;
      state.deleteTemplate.response =
        initialState.deleteTemplate.response;
      state.deleteTemplate.failed = initialState.deleteTemplate.failed;
    },
    
    requestCreateTemplate: (state) => {
      state.createTemplate.request = true;
    },

    responseCreateTemplate: (state, action) => {
      state.createTemplate.response = true;
      state.createTemplate.data = action?.payload;
    },
    failedCreateTemplate: (state, action) => {
      state.createTemplate.failed = true;
      state.createTemplate.error = action?.payload;
    },

    responseUpdateTemplate: (state, action) => {
      state.updateTemplate.response = true;
      state.updateTemplate.data = action.payload;
    },
    failedUpdateTemplate: (state, action) => {
      state.updateTemplate.failed = true;
      state.updateTemplate.error = action?.payload;
    },
    requestUpdateTemplate: (state) => {
      state.updateTemplate.request = true;
    },
    responseDeleteTemplate: (state, action) => {
      state.deleteTemplate.response = true;
      state.deleteTemplate.data = action?.payload;
    },
    failedDeleteTemplate: (state, action) => {
      state.deleteTemplate.failed = true;
      state.deleteTemplate.error = action?.payload;
    },
    requestDeleteTemplate: (state) => {
      state.deleteTemplate.request = true;
    },
    responseAllTemplate: (state, action) => {
      state.allTemplate.response = true;
      state.allTemplate.data = action?.payload;
    },
    failedAllTemplate: (state, action) => {
      state.allTemplate.failed = true;
      state.allTemplate.error = action?.payload;
    },
    requestAllTemplate: (state) => {

      state.allTemplate.request = true;
    },
  },
});
export default TemplateSlice.reducer;
export const {
  
  failedUpdateTemplate,
  failedCreateTemplate,
  requestUpdateTemplate,
  requestCreateTemplate,
  responseCreateTemplate,
  failedAllTemplate,
  requestAllTemplate,
  responseAllTemplate,
  failedDeleteTemplate,
  requestDeleteTemplate,
  responseDeleteTemplate,
  resetTemplate,
  responseUpdateTemplate,
} = TemplateSlice.actions;
