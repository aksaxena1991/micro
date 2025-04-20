import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  updateSerialSetting: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  createSerialSetting: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  deleteSerialSetting: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  allSerialSettingByCompanyIDOrBrFrID: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },
  currentModuleSerialSetting: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
};
export const SerialSettingSlice = createSlice({
  name: "serialSetting",
  initialState,
  reducers: {
    resetSerialSetting: (state) => {
      state.currentModuleSerialSetting.request =
        initialState.currentModuleSerialSetting.request;
      state.currentModuleSerialSetting.response =
        initialState.currentModuleSerialSetting.response;
      state.currentModuleSerialSetting.failed =
        initialState.currentModuleSerialSetting.failed;

      state.allSerialSettingByCompanyIDOrBrFrID.request =
        initialState.allSerialSettingByCompanyIDOrBrFrID.request;
      state.allSerialSettingByCompanyIDOrBrFrID.response =
        initialState.allSerialSettingByCompanyIDOrBrFrID.response;
      state.allSerialSettingByCompanyIDOrBrFrID.failed =
        initialState.allSerialSettingByCompanyIDOrBrFrID.failed;

      state.createSerialSetting.request =
        initialState.createSerialSetting.request;
      state.createSerialSetting.response =
        initialState.createSerialSetting.response;
      state.createSerialSetting.failed = initialState.createSerialSetting.failed;

      state.updateSerialSetting.request =
        initialState.updateSerialSetting.request;
      state.updateSerialSetting.response =
        initialState.updateSerialSetting.response;
      state.updateSerialSetting.failed = initialState.updateSerialSetting.failed;

      state.deleteSerialSetting.request =
        initialState.deleteSerialSetting.request;
      state.deleteSerialSetting.response =
        initialState.deleteSerialSetting.response;
      state.deleteSerialSetting.failed = initialState.deleteSerialSetting.failed;
    },
    requestSerialSettingByCompanyIdBrFrIdModuleName: (state) => {
      state.currentModuleSerialSetting.request = true;
    },
    responseSerialSettingByCompanyIdBrFrIdModuleName: (state, action) => {
      state.currentModuleSerialSetting.response = true;
      state.currentModuleSerialSetting.data = action?.payload;
    },
    failedSerialSettingByCompanyIdBrFrIdModuleName: (state, action) => {
      state.currentModuleSerialSetting.failed = true;
      state.currentModuleSerialSetting.error = action?.payload;
    },
    requestCreateSerialSetting: (state) => {
      state.createSerialSetting.request = true;
    },

    responseCreateSerialSetting: (state, action) => {
      state.createSerialSetting.response = true;
      state.createSerialSetting.data = action?.payload;
    },
    failedCreateSerialSetting: (state, action) => {
      state.createSerialSetting.failed = true;
      state.createSerialSetting.error = action?.payload;
    },

    responseUpdateSerialSetting: (state, action) => {
      state.updateSerialSetting.response = true;
      state.updateSerialSetting.data = action.payload;
    },
    failedUpdateSerialSetting: (state, action) => {
      state.updateSerialSetting.failed = true;
      state.updateSerialSetting.error = action?.payload;
    },
    requestUpdateSerialSetting: (state) => {
      state.updateSerialSetting.request = true;
    },
    responseDeleteSerialSetting: (state, action) => {
      state.deleteSerialSetting.response = true;
      state.deleteSerialSetting.data = action?.payload;
    },
    failedDeleteSerialSetting: (state, action) => {
      state.deleteSerialSetting.failed = true;
      state.deleteSerialSetting.error = action?.payload;
    },
    requestDeleteSerialSetting: (state) => {
      state.deleteSerialSetting.request = true;
    },
    responseAllSerialSettingByCompanyIDOrBrFrID: (state, action) => {
      state.allSerialSettingByCompanyIDOrBrFrID.response = true;
      state.allSerialSettingByCompanyIDOrBrFrID.data = action?.payload;
    },
    failedAllSerialSettingByCompanyIDOrBrFrID: (state, action) => {
      state.allSerialSettingByCompanyIDOrBrFrID.failed = true;
      state.allSerialSettingByCompanyIDOrBrFrID.error = action?.payload;
    },
    requestAllSerialSettingByCompanyIDOrBrFrID: (state) => {

      state.allSerialSettingByCompanyIDOrBrFrID.request = true;
    },
  },
});
export default SerialSettingSlice.reducer;
export const {
  requestSerialSettingByCompanyIdBrFrIdModuleName,
  responseSerialSettingByCompanyIdBrFrIdModuleName,
  failedSerialSettingByCompanyIdBrFrIdModuleName,
  failedUpdateSerialSetting,
  failedCreateSerialSetting,
  requestUpdateSerialSetting,
  requestCreateSerialSetting,
  responseCreateSerialSetting,
  failedAllSerialSettingByCompanyIDOrBrFrID,
  requestAllSerialSettingByCompanyIDOrBrFrID,
  responseAllSerialSettingByCompanyIDOrBrFrID,
  failedDeleteSerialSetting,
  requestDeleteSerialSetting,
  responseDeleteSerialSetting,
  resetSerialSetting,
  responseUpdateSerialSetting,
} = SerialSettingSlice.actions;
