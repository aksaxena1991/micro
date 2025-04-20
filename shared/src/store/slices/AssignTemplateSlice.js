import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  updateAssignTemplate: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  createAssignTemplate: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  deleteAssignTemplate: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  allAssignTemplateByBrFrIdOrCompanyId: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },

};
export const AssignTemplateSlice = createSlice({
  name: "assignTemplate",
  initialState,
  reducers: {
    resetAssignTemplate: (state) => {


      state.allAssignTemplateByBrFrIdOrCompanyId.request =
        initialState.allAssignTemplateByBrFrIdOrCompanyId.request;
      state.allAssignTemplateByBrFrIdOrCompanyId.response =
        initialState.allAssignTemplateByBrFrIdOrCompanyId.response;
      state.allAssignTemplateByBrFrIdOrCompanyId.failed =
        initialState.allAssignTemplateByBrFrIdOrCompanyId.failed;

      state.createAssignTemplate.request =
        initialState.createAssignTemplate.request;
      state.createAssignTemplate.response =
        initialState.createAssignTemplate.response;
      state.createAssignTemplate.failed = initialState.createAssignTemplate.failed;

      state.updateAssignTemplate.request =
        initialState.updateAssignTemplate.request;
      state.updateAssignTemplate.response =
        initialState.updateAssignTemplate.response;
      state.updateAssignTemplate.failed = initialState.updateAssignTemplate.failed;

      state.deleteAssignTemplate.request =
        initialState.deleteAssignTemplate.request;
      state.deleteAssignTemplate.response =
        initialState.deleteAssignTemplate.response;
      state.deleteAssignTemplate.failed = initialState.deleteAssignTemplate.failed;
    },

    requestCreateAssignTemplate: (state) => {
      state.createAssignTemplate.request = true;
    },

    responseCreateAssignTemplate: (state, action) => {
      state.createAssignTemplate.response = true;
      state.createAssignTemplate.data = action?.payload;
    },
    failedCreateAssignTemplate: (state, action) => {
      state.createAssignTemplate.failed = true;
      state.createAssignTemplate.error = action?.payload;
    },

    responseUpdateAssignTemplate: (state, action) => {
      state.updateAssignTemplate.response = true;
      state.updateAssignTemplate.data = action.payload;
    },
    failedUpdateAssignTemplate: (state, action) => {
      state.updateAssignTemplate.failed = true;
      state.updateAssignTemplate.error = action?.payload;
    },
    requestUpdateAssignTemplate: (state) => {
      state.updateAssignTemplate.request = true;
    },
    responseDeleteAssignTemplate: (state, action) => {
      state.deleteAssignTemplate.response = true;
      state.deleteAssignTemplate.data = action?.payload;
    },
    failedDeleteAssignTemplate: (state, action) => {
      state.deleteAssignTemplate.failed = true;
      state.deleteAssignTemplate.error = action?.payload;
    },
    requestDeleteAssignTemplate: (state) => {
      state.deleteAssignTemplate.request = true;
    },
    responseAllAssignTemplateByBrFrIdOrCompanyId: (state, action) => {
      state.allAssignTemplateByBrFrIdOrCompanyId.response = true;
      state.allAssignTemplateByBrFrIdOrCompanyId.data = action?.payload;
    },
    failedAllAssignTemplateByBrFrIdOrCompanyId: (state, action) => {
      state.allAssignTemplateByBrFrIdOrCompanyId.failed = true;
      state.allAssignTemplateByBrFrIdOrCompanyId.error = action?.payload;
    },
    requestAllAssignTemplateByBrFrIdOrCompanyId: (state) => {

      state.allAssignTemplateByBrFrIdOrCompanyId.request = true;
    },
  },
});
export default AssignTemplateSlice.reducer;
export const {

  failedUpdateAssignTemplate,
  failedCreateAssignTemplate,
  requestUpdateAssignTemplate,
  requestCreateAssignTemplate,
  responseCreateAssignTemplate,
  failedAllAssignTemplateByBrFrIdOrCompanyId,
  requestAllAssignTemplateByBrFrIdOrCompanyId,
  responseAllAssignTemplateByBrFrIdOrCompanyId,
  failedDeleteAssignTemplate,
  requestDeleteAssignTemplate,
  responseDeleteAssignTemplate,
  resetAssignTemplate,
  responseUpdateAssignTemplate,
} = AssignTemplateSlice.actions;
