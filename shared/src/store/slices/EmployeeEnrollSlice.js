import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allEmployeeEnrollByCompanyID: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },

  createEmployeeEnroll: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  deleteEmployeeEnroll: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  updateEmployeeEnroll: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

};
export const EmployeeEnrollSlice = createSlice({
  name: "employeeEnroll",
  initialState,
  reducers: {
    resetEmployeeEnroll: (state) => {
      state.allEmployeeEnrollByCompanyID.request = initialState.allEmployeeEnrollByCompanyID.request;
      state.allEmployeeEnrollByCompanyID.response = initialState.allEmployeeEnrollByCompanyID.response;
      state.allEmployeeEnrollByCompanyID.failed = initialState.allEmployeeEnrollByCompanyID.failed;

      state.createEmployeeEnroll.request = initialState.createEmployeeEnroll.request;
      state.createEmployeeEnroll.response = initialState.createEmployeeEnroll.response;
      state.createEmployeeEnroll.failed = initialState.createEmployeeEnroll.failed;

      state.deleteEmployeeEnroll.request = initialState.deleteEmployeeEnroll.request;
      state.deleteEmployeeEnroll.response = initialState.deleteEmployeeEnroll.response;
      state.deleteEmployeeEnroll.failed = initialState.deleteEmployeeEnroll.failed;

      state.updateEmployeeEnroll.request = initialState.updateEmployeeEnroll.request;
      state.updateEmployeeEnroll.response = initialState.updateEmployeeEnroll.response;
      state.updateEmployeeEnroll.failed = initialState.updateEmployeeEnroll.failed;
    },
    requestAllEmployeeEnroll: (state) => {
      state.allEmployeeEnrollByCompanyID.request = true;
    },
    responseAllEmployeeEnroll: (state, action) => {
      state.allEmployeeEnrollByCompanyID.response = true;
      state.allEmployeeEnrollByCompanyID.data = action?.payload;
    },
    failedAllEmployeeEnroll: (state, action) => {
      state.allEmployeeEnrollByCompanyID.failed = true;
      state.allEmployeeEnrollByCompanyID.error = action?.payload;
    },
    requestCreateEmployeeEnroll: (state) => {

      state.createEmployeeEnroll.request = true;
    },
    responseCreateEmployeeEnroll: (state, action) => {

      state.createEmployeeEnroll.response = true;
      state.createEmployeeEnroll.data = action?.payload;
    },
    failedCreateEmployeeEnroll: (state, action) => {

      state.createEmployeeEnroll.failed = true;
      state.createEmployeeEnroll.error = action?.payload;
    },
    requestDeleteEmployeeEnroll: (state) => {

      state.deleteEmployeeEnroll.request = true;
    },
    responseDeleteEmployeeEnroll: (state, action) => {

      state.deleteEmployeeEnroll.response = true;
      state.deleteEmployeeEnroll.data = action?.payload;
    },
    failedDeleteEmployeeEnroll: (state, action) => {

      state.deleteEmployeeEnroll.failed = true;
      state.deleteEmployeeEnroll.error = action?.payload;
    },
    requestUpdateEmployeeEnroll: (state) => {

      state.updateEmployeeEnroll.request = true;
    },
    responseUpdateEmployeeEnroll: (state, action) => {

      state.updateEmployeeEnroll.response = true;
      state.updateEmployeeEnroll.data = action?.payload;
    },
    failedUpdateEmployeeEnroll: (state, action) => {

      state.updateEmployeeEnroll.failed = true;
      state.updateEmployeeEnroll.error = action?.payload;

    },
  },
});
export default EmployeeEnrollSlice.reducer;
export const {
  failedAllEmployeeEnroll,
  failedCreateEmployeeEnroll,
  failedDeleteEmployeeEnroll,
  failedUpdateEmployeeEnroll,
  requestAllEmployeeEnroll,
  requestCreateEmployeeEnroll,
  responseCreateEmployeeEnroll,
  requestDeleteEmployeeEnroll,
  requestUpdateEmployeeEnroll,
  resetEmployeeEnroll,
  responseAllEmployeeEnroll,
  responseDeleteEmployeeEnroll,
  responseUpdateEmployeeEnroll,
} = EmployeeEnrollSlice.actions;
