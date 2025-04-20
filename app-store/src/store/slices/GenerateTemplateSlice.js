import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  generateTemplate: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },


};
export const GenerateTemplateSlice = createSlice({
  name: "generateTemplate",
  initialState,
  reducers: {
    resetGenerateTemplate: (state) => {
      state.generateTemplate.request =
        initialState.generateTemplate.request;
      state.generateTemplate.response =
        initialState.generateTemplate.response;
      state.generateTemplate.failed = initialState.generateTemplate.failed;


    },
    responseGenerateTemplate: (state, action) => {
      state.generateTemplate.response = true;
      state.generateTemplate.data = action.payload;
    },
    failedGenerateTemplate: (state, action) => {
      state.generateTemplate.failed = true;
      state.generateTemplate.error = action?.payload;
    },
    requestGenerateTemplate: (state) => {
      state.generateTemplate.request = true;
    },

  },
});
export default GenerateTemplateSlice.reducer;
export const {
  failedGenerateTemplate,
  requestGenerateTemplate,
  resetGenerateTemplate,
  responseGenerateTemplate,
} = GenerateTemplateSlice.actions;
