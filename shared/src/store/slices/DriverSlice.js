import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allDriverByCompanyIdOrBrFrId: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },
  createDriver: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  deleteDriver: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  updateDriver: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
};
export const DriverSlice = createSlice({
  name: "driver",
  initialState,
  reducers: {
    resetDriver: (state) => {
      state.allDriverByCompanyIdOrBrFrId.request =
        initialState.allDriverByCompanyIdOrBrFrId.request;
      state.allDriverByCompanyIdOrBrFrId.response =
        initialState.allDriverByCompanyIdOrBrFrId.response;
      state.allDriverByCompanyIdOrBrFrId.failed =
        initialState.allDriverByCompanyIdOrBrFrId.failed;

      state.createDriver.request =
        initialState.createDriver.request;
      state.createDriver.response =
        initialState.createDriver.response;
      state.createDriver.failed = initialState.createDriver.failed;

      state.deleteDriver.request =
        initialState.deleteDriver.request;
      state.deleteDriver.response =
        initialState.deleteDriver.response;

      state.updateDriver.request =
        initialState.updateDriver.request;
      state.updateDriver.response =
        initialState.updateDriver.response;
    },
    requestCreateDriver: (state) => {
      state.createDriver.request = true;
    },
    responseCreateDriver: (state, action) => {
      state.createDriver.response = true;
      state.createDriver.data = action?.payload;
    },
    failedCreateDriver: (state, action) => {
      state.createDriver.failed = true;
      state.createDriver.error = action?.payload;
    },
    requestAllDriverByCompanyIdOrBrFrId: (state) => {
      state.allDriverByCompanyIdOrBrFrId.request = true;
    },
    responseAllDriverByCompanyIdOrBrFrId: (state, action) => {
      state.allDriverByCompanyIdOrBrFrId.response = true;
      state.allDriverByCompanyIdOrBrFrId.data = action?.payload;
    },
    failedAllDriverByCompanyIdOrBrFrId: (state, action) => {
      state.allDriverByCompanyIdOrBrFrId.failed = true;
      state.allDriverByCompanyIdOrBrFrId.error = action?.payload;
    },
    responseDeleteDriver: (state, action) => {
      state.deleteDriver.response = true;
      state.deleteDriver.data = action?.payload;
    },
    failedDeleteDriver: (state, action) => {
      state.deleteDriver.failed = true;
      state.deleteDriver.error = action?.payload;
    },
    responseUpdateDriver: (state, action) => {
      state.updateDriver.response = true;
      state.updateDriver.data = action?.payload;
    },
    failedUpdateDriver: (state, action) => {
      state.updateDriver.failed = true;
      state.updateDriver.error = action?.payload;
    },
    requestDeleteDriver: (state) => {
      state.deleteDriver.request = true;
    },
    requestUpdateDriver: (state) => {
      state.updateDriver.request = true;
    },
  },
});
export default DriverSlice.reducer;
export const {
  requestAllDriverByCompanyIdOrBrFrId,
  responseAllDriverByCompanyIdOrBrFrId,
  failedAllDriverByCompanyIdOrBrFrId,
  resetDriver,
  requestDeleteDriver,
  requestUpdateDriver,
  failedUpdateDriver,
  responseUpdateDriver,
  failedDeleteDriver,
  responseDeleteDriver,
  failedAllDriver,
  failedCreateDriver,
  requestAllDriver,
  requestCreateDriver,
  responseAllDriver,
  responseCreateDriver,
} = DriverSlice.actions;
