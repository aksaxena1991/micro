import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allFeature: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },

  createFeature: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  deleteFeature: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  updateFeature: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
};
export const FeatureSlice = createSlice({
  name: "feature",
  initialState,
  reducers: {
    resetFeature: (state) => {
      state.createFeature.request = initialState.createFeature.request;
      state.createFeature.response = initialState.createFeature.response;
      state.createFeature.failed = initialState.createFeature.failed;

      state.deleteFeature.request = initialState.deleteFeature.request;
      state.deleteFeature.response = initialState.deleteFeature.response;
      state.deleteFeature.failed = initialState.deleteFeature.failed;

      state.updateFeature.request = initialState.updateFeature.request;
      state.updateFeature.response = initialState.updateFeature.response;
      state.updateFeature.failed = initialState.updateFeature.failed;

      state.allFeature.request = initialState.allFeature.request;
      state.allFeature.response = initialState.allFeature.response;
      state.allFeature.failed = initialState.allFeature.failed;
    },
    requestAllFeature: (state) => {
      state.allFeature.request = true;
    },
    responseAllFeature: (state, action) => {
      state.allFeature.response = true;
      state.allFeature.data = action?.payload;
    },
    failedAllFeature: (state, action) => {
      state.allFeature.failed = true;
      state.allFeature.error = action?.payload;
    },
    requestCreateFeature: (state) => {
      state.createFeature.request = true;
    },
    responseCreateFeature: (state, action) => {
      state.createFeature.response = true;
      state.createFeature.data = action?.payload;
    },
    failedCreateFeature: (state, action) => {
      state.createFeature.failed = true;
      state.createFeature.error = action?.payload;
    },
    requestDeleteFeature: (state) => {
      state.deleteFeature.request = true;
    },
    responseDeleteFeature: (state, action) => {
      state.deleteFeature.response = true;
      state.deleteFeature.data = action?.payload;
    },
    failedDeleteFeature: (state, action) => {
      state.deleteFeature.failed = true;
      state.deleteFeature.error = action?.payload;
    },
    requestUpdateFeature: (state) => {
      state.updateFeature.request = true;
    },
    responseUpdateFeature: (state, action) => {
      state.updateFeature.response = true;
      state.updateFeature.data = action?.payload;
    },
    failedUpdateFeature: (state, action) => {
      state.updateFeature.failed = true;
      state.updateFeature.error = action?.payload;
    },
  },
});
export default FeatureSlice.reducer;
export const {
  resetFeature,
  requestAllFeature,
  failedAllFeature,
  responseAllFeature,
  failedCreateFeature,
  requestCreateFeature,
  responseCreateFeature,
  failedDeleteFeature,
  requestDeleteFeature,
  responseDeleteFeature,
  failedUpdateFeature,
  requestUpdateFeature,
  responseUpdateFeature,
} = FeatureSlice.actions;
