import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allUnitType: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },

  createUnitType: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  updateUnitType: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  deleteUnitType: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
};
export const UnitTypeSlice = createSlice({
  name: "unitType",
  initialState,
  reducers: {
    resetUnitType: (state) => {
      state.allUnitType.failed = initialState.allUnitType.failed;
      state.allUnitType.request = initialState.allUnitType.request;
      state.allUnitType.response = initialState.allUnitType.response;

      state.createUnitType.failed = initialState.createUnitType.failed;
      state.createUnitType.request = initialState.createUnitType.request;
      state.createUnitType.response = initialState.createUnitType.response;

      state.updateUnitType.failed = initialState.updateUnitType.failed;
      state.updateUnitType.request = initialState.updateUnitType.request;
      state.updateUnitType.response = initialState.updateUnitType.response;

      state.deleteUnitType.failed = initialState.deleteUnitType.failed;
      state.deleteUnitType.request = initialState.deleteUnitType.request;
      state.deleteUnitType.response = initialState.deleteUnitType.response;
    },
    requestCreateUnitType: (state) => {
      state.createUnitType.request = true;
    },
    responseCreateUnitType: (state, action) => {
      state.createUnitType.response = true;
      state.createUnitType.data = action?.payload;
    },
    failedCreateUnitType: (state, action) => {
      state.createUnitType.failed = true;
      state.createUnitType.error = action?.payload;
    },
    requestAllUnitType: (state) => {
      state.allUnitType.request = true;
    },
    responseAllUnitType: (state, action) => {
      state.allUnitType.response = true;
      state.allUnitType.data = action?.payload;
    },
    failedAllUnitType: (state, action) => {
      state.allUnitType.failed = true;
      state.allUnitType.error = action?.payload;
    },
    responseDeleteUnitType: (state, action) => {
      state.deleteUnitType.response = true;
      state.deleteUnitType.data = action?.payload;
    },
    failedDeleteUnitType: (state, action) => {
      state.deleteUnitType.failed = true;
      state.deleteUnitType.error = action?.payload;
    },
    responseUpdateUnitType: (state, action) => {
      state.updateUnitType.response = true;
      state.updateUnitType.data = action?.payload;
    },
    failedUpdateUnitType: (state, action) => {
      state.updateUnitType.failed = true;
      state.updateUnitType.error = action?.payload;
    },
    requestDeleteUnitType: (state) => {
      state.deleteUnitType.request = true;
    },
    requestUpdateUnitType: (state) => {
      state.updateUnitType.request = true;
    },
  },
});
export default UnitTypeSlice.reducer;
export const {
  resetUnitType,
  requestDeleteUnitType,
  requestUpdateUnitType,
  failedUpdateUnitType,
  responseUpdateUnitType,
  failedDeleteUnitType,
  responseDeleteUnitType,
  failedAllUnitType,
  failedCreateUnitType,
  requestAllUnitType,
  requestCreateUnitType,
  responseAllUnitType,
  responseCreateUnitType,
} = UnitTypeSlice.actions;
