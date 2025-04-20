import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allPlan: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },
  currentPlan: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  updatePlan: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  deletePlan: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  createPlan: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  }
};
export const PlanSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    resetPlan: (state) => {
      state.createPlan.request = initialState.createPlan.request;
      state.createPlan.response = initialState.createPlan.response;
      state.createPlan.failed = initialState.createPlan.failed;

      state.updatePlan.request = initialState.updatePlan.request;
      state.updatePlan.response = initialState.updatePlan.response;
      state.updatePlan.failed = initialState.updatePlan.failed;

      state.deletePlan.request = initialState.deletePlan.request;
      state.deletePlan.response = initialState.deletePlan.response;
      state.deletePlan.failed = initialState.deletePlan.failed;

      state.currentPlan.request = initialState.currentPlan.request
      state.currentPlan.response = initialState.currentPlan.response;
      state.currentPlan.failed = initialState.currentPlan.failed;

      state.allPlan.request = initialState.allPlan.request;
      state.allPlan.response = initialState.allPlan.response;
      state.allPlan.failed = initialState.allPlan.failed;

    },
    requestAllPlan: (state) => {
      state.allPlan.request = true;
    },
    responseAllPlan: (state, action) => {

      state.allPlan.response = true;
      state.allPlan.data = action?.payload;
    },
    failedAllPlan: (state, action) => {
      state.allPlan.failed = true;
      state.allPlan.error = action?.payload;
    },
    requestCreatePlan: (state) => {
      state.createPlan.request = true;
    },
    responseCreatePlan: (state, action) => {

      state.createPlan.response = true;
      state.createPlan.data = action?.payload;
    },
    failedCreatePlan: (state, action) => {

      state.createPlan.failed = true;
      state.createPlan.error = action?.payload;
    },
    requestDeletePlan: (state) => {

      state.deletePlan.request = true;
    },
    responseDeletePlan: (state, action) => {

      state.deletePlan.response = true;
      state.deletePlan.data = action?.payload;
    },
    failedDeletePlan: (state, action) => {

      state.deletePlan.failed = true;
      state.deletePlan.error = action?.payload;
    },
    requestUpdatePlan: (state) => {

      state.updatePlan.request = true;
    },
    responseUpdatePlan: (state, action) => {

      state.updatePlan.response = true;
      state.updatePlan.data = action?.payload;
    },
    failedUpdatePlan: (state, action) => {

      state.updatePlan.failed = true;
      state.updatePlan.error = action?.payload;
    },
    requestCurrentPlan: (state) => {

      state.currentPlan.request = true;
    },
    responseCurrentPlan: (state, action) => {

      state.currentPlan.response = true;
      state.currentPlan.data = action?.payload;
    },
    failedCurrentPlan: (state, action) => {

      state.currentPlan.failed = true;
      state.currentPlan.error = action?.payload;
    },
  },
});
export default PlanSlice.reducer;
export const {
  failedCurrentPlan,
  requestCurrentPlan,
  responseCurrentPlan,
  failedAllPlan,
  failedCreatePlan,
  failedDeletePlan,
  failedUpdatePlan,
  requestAllPlan,
  requestCreatePlan,
  responseCreatePlan,
  requestDeletePlan,
  requestUpdatePlan,
  resetPlan,
  responseAllPlan,
  responseDeletePlan,
  responseUpdatePlan,
} = PlanSlice.actions;
