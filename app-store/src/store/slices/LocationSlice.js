import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allLocationViaPincode: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },

  
};
export const LocationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    resetLocation: (state) => {
      state.allLocationViaPincode.request = initialState.allLocationViaPincode.request;
      state.allLocationViaPincode.response = initialState.allLocationViaPincode.response;
      state.allLocationViaPincode.failed = initialState.allLocationViaPincode.failed;
      state.allLocationViaPincode.data = initialState.allLocationViaPincode.data;
    },
    requestAllLocationViaPincode: (state) => {
      state.allLocationViaPincode.request = true;
    },
    responseAllLocationViaPincode: (state, action) => {
      state.allLocationViaPincode.response = true;
      state.allLocationViaPincode.data = action?.payload;
    },
    failedAllLocationViaPincode: (state, action) => {
      state.allLocationViaPincode.failed = true;
      state.allLocationViaPincode.error = action?.payload;
    },
    
  },
});
export default LocationSlice.reducer;
export const {
  resetLocation,
  requestAllLocationViaPincode,
  failedAllLocationViaPincode,
  responseAllLocationViaPincode,
  
} = LocationSlice.actions;
