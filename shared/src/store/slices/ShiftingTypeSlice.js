import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allShiftingType: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },

  createShiftingType: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  updateShiftingType: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  deleteShiftingType: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
};
export const ShiftingTypeSlice = createSlice({
  name: "shiftingType",
  initialState,
  reducers: {
    resetShiftingType: (state) => {
      state.allShiftingType.request = initialState.allShiftingType.request;
      state.allShiftingType.response = initialState.allShiftingType.response;
      state.allShiftingType.failed = initialState.allShiftingType.failed;

      state.createShiftingType.request =
        initialState.createShiftingType.request;
      state.createShiftingType.response =
        initialState.createShiftingType.response;
      state.createShiftingType.failed = initialState.createShiftingType.failed;

      state.updateShiftingType.request =
        initialState.updateShiftingType.request;
      state.updateShiftingType.response =
        initialState.updateShiftingType.response;
      state.updateShiftingType.failed = initialState.updateShiftingType.failed;

      state.deleteShiftingType.request =
        initialState.deleteShiftingType.request;
      state.deleteShiftingType.response =
        initialState.deleteShiftingType.response;
      state.deleteShiftingType.failed = initialState.deleteShiftingType.failed;
    },
    requestCreateShiftingType: (state) => {
      state.createShiftingType.request = true;
    },
    responseCreateShiftingType: (state, action) => {
      state.createShiftingType.response = true;
      state.createShiftingType.data = action?.payload;
    },
    failedCreateShiftingType: (state, action) => {
      state.createShiftingType.failed = true;
      state.createShiftingType.error = action?.payload;
    },
    requestAllShiftingType: (state) => {
      state.allShiftingType.request = true;
    },
    responseAllShiftingType: (state, action) => {
      state.allShiftingType.response = true;
      state.allShiftingType.data = action?.payload;
    },
    failedAllShiftingType: (state, action) => {
      state.allShiftingType.failed = true;
      state.allShiftingType.error = action?.payload;
    },
    responseDeleteShiftingType: (state, action) => {
      state.deleteShiftingType.response = true;
      state.deleteShiftingType.data = action?.payload;
    },
    failedDeleteShiftingType: (state, action) => {
      state.deleteShiftingType.failed = true;
      state.deleteShiftingType.error = action?.payload;
    },
    responseUpdateShiftingType: (state, action) => {
      state.updateShiftingType.response = true;
      state.updateShiftingType.data = action?.payload;
    },
    failedUpdateShiftingType: (state, action) => {
      state.updateShiftingType.failed = true;
      state.updateShiftingType.error = action?.payload;
    },
    requestDeleteShiftingType: (state) => {
      state.deleteShiftingType.request = true;
    },
    requestUpdateShiftingType: (state) => {
      state.updateShiftingType.request = true;
    },
  },
});
export default ShiftingTypeSlice.reducer;
export const {
  resetShiftingType,
  requestDeleteShiftingType,
  requestUpdateShiftingType,
  failedUpdateShiftingType,
  responseUpdateShiftingType,
  failedDeleteShiftingType,
  responseDeleteShiftingType,
  failedAllShiftingType,
  failedCreateShiftingType,
  requestAllShiftingType,
  requestCreateShiftingType,
  responseAllShiftingType,
  responseCreateShiftingType,
} = ShiftingTypeSlice.actions;
