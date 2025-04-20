import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allModuleFeatureMapper: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },

  createModuleFeatureMapper: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  deleteModuleFeatureMapper: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  updateModuleFeatureMapper: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

};
export const ModuleFeatureMapperSlice = createSlice({
  name: "moduleFeatureMapper",
  initialState,
  reducers: {
    resetModuleFeatureMapper: (state) => {
      state.createModuleFeatureMapper.request = initialState.createModuleFeatureMapper.request;
      state.createModuleFeatureMapper.response = initialState.createModuleFeatureMapper.response;
      state.createModuleFeatureMapper.failed = initialState.createModuleFeatureMapper.failed;

      state.deleteModuleFeatureMapper.request = initialState.deleteModuleFeatureMapper.request;
      state.deleteModuleFeatureMapper.response = initialState.deleteModuleFeatureMapper.response;
      state.deleteModuleFeatureMapper.failed = initialState.deleteModuleFeatureMapper.failed;

      state.updateModuleFeatureMapper.request = initialState.updateModuleFeatureMapper.request;
      state.updateModuleFeatureMapper.response = initialState.updateModuleFeatureMapper.response;
      state.updateModuleFeatureMapper.failed = initialState.updateModuleFeatureMapper.failed;

      state.allModuleFeatureMapper.request = initialState.allModuleFeatureMapper.request;
      state.allModuleFeatureMapper.response = initialState.allModuleFeatureMapper.response;
      state.allModuleFeatureMapper.failed = initialState.allModuleFeatureMapper.failed;

    },
    requestAllModuleFeatureMapper: (state) => {

      state.allModuleFeatureMapper.request = true;

    },
    responseAllModuleFeatureMapper: (state, action) => {

      state.allModuleFeatureMapper.response = true;
      state.allModuleFeatureMapper.data = action?.payload;
    },
    failedAllModuleFeatureMapper: (state, action) => {

      state.allModuleFeatureMapper.failed = true;
      state.allModuleFeatureMapper.error = action?.payload;
    },
    requestCreateModuleFeatureMapper: (state) => {

      state.createModuleFeatureMapper.request = true;

    },
    responseCreateModuleFeatureMapper: (state, action) => {

      state.createModuleFeatureMapper.response = true;
      state.createModuleFeatureMapper.data = action?.payload;
    },
    failedCreateModuleFeatureMapper: (state, action) => {

      state.createModuleFeatureMapper.failed = true;
      state.createModuleFeatureMapper.error = action?.payload;
    },
    requestDeleteModuleFeatureMapper: (state) => {

      state.deleteModuleFeatureMapper.request = true;
    },
    responseDeleteModuleFeatureMapper: (state, action) => {

      state.deleteModuleFeatureMapper.response = true;
      state.deleteModuleFeatureMapper.data = action?.payload;
    },
    failedDeleteModuleFeatureMapper: (state, action) => {

      state.deleteModuleFeatureMapper.failed = true;
      state.deleteModuleFeatureMapper.error = action?.payload;
    },
    requestUpdateModuleFeatureMapper: (state) => {

      state.updateModuleFeatureMapper.request = true;
    },
    responseUpdateModuleFeatureMapper: (state, action) => {

      state.updateModuleFeatureMapper.response = true;
      state.updateModuleFeatureMapper.data = action?.payload;
    },
    failedUpdateModuleFeatureMapper: (state, action) => {

      state.updateModuleFeatureMapper.failed = true;
      state.updateModuleFeatureMapper.error = action?.payload;
    },
  },
});
export default ModuleFeatureMapperSlice.reducer;
export const {
  resetModuleFeatureMapper,
  requestAllModuleFeatureMapper,
  failedAllModuleFeatureMapper,
  responseAllModuleFeatureMapper,
  failedCreateModuleFeatureMapper,
  requestCreateModuleFeatureMapper,
  responseCreateModuleFeatureMapper,
  failedDeleteModuleFeatureMapper,
  requestDeleteModuleFeatureMapper,
  responseDeleteModuleFeatureMapper,
  failedUpdateModuleFeatureMapper,
  requestUpdateModuleFeatureMapper,
  responseUpdateModuleFeatureMapper,
} = ModuleFeatureMapperSlice.actions;
