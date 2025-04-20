import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  createRole: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  updateRole: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  deleteRole: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  allRole: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },

};
export const RoleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    resetRole: (state) => {
      state.allRole.request = initialState.allRole.request;
      state.allRole.response = initialState.allRole.response;
      state.allRole.failed = initialState.allRole.failed;

      state.createRole.request = initialState.createRole.request;
      state.createRole.response = initialState.createRole.response;
      state.createRole.failed = initialState.createRole.failed;

      state.updateRole.request = initialState.updateRole.request;
      state.updateRole.response = initialState.updateRole.response;
      state.updateRole.failed = initialState.updateRole.failed;

      state.deleteRole.request = initialState.deleteRole.request;
      state.deleteRole.response = initialState.deleteRole.response;
      state.deleteRole.failed = initialState.deleteRole.failed;
    },
    requestAllRole: (state) => {
      state.allRole.request = true;
    },
    responseAllRole: (state, action) => {
      state.allRole.response = true;
      state.allRole.data = action.payload;
    },
    failedAllRole: (state, action) => {
      state.allRole.failed = true;
      state.allRole.error = action.payload;
    },
    requestCreateRole: (state) => {
      state.createRole.request = true;
    },
    responseCreateRole: (state, action) => {
      state.createRole.response = true;
      state.createRole.data = action.payload;
    },
    failedCreateRole: (state, action) => {
      state.createRole.failed = true;
      state.createRole.error = action.payload;
    },
    requestDeleteRole: (state) => {
      state.deleteRole.request = true;
    },
    responseDeleteRole: (state, action) => {
      state.deleteRole.response = true;
      state.deleteRole.data = action.payload;
    },
    failedDeleteRole: (state, action) => {
      state.deleteRole.failed = true;
      state.deleteRole.error = action.payload;
    },
    requestUpdateRole: (state) => {
      state.updateRole.request = true;
    },
    responseUpdateRole: (state, action) => {
      state.updateRole.data = action.payload;
      state.updateRole.response = true;
    },
    failedUpdateRole: (state, action) => {
      state.updateRole.failed = true;
      state.updateRole.error = action.payload;
    },
  },
});
export default RoleSlice.reducer;
export const {
  resetRole,
  requestAllRole,
  failedAllRole,
  responseAllRole,
  failedCreateRole,
  requestCreateRole,
  responseCreateRole,
  failedDeleteRole,
  requestDeleteRole,
  responseDeleteRole,
  failedUpdateRole,
  requestUpdateRole,
  responseUpdateRole,
} = RoleSlice.actions;
