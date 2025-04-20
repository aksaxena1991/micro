import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allVehicleLoadSize: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },

  createVehicleLoadSize: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  updateVehicleLoadSize: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  deleteVehicleLoadSize: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },



};
export const VehicleLoadSizeSlice = createSlice({
  name: "vehicleLoadSize",
  initialState,
  reducers: {
    resetVehicleLoadSize: (state) => {
      state.createVehicleLoadSize.request = initialState.createVehicleLoadSize.request;
      state.createVehicleLoadSize.response = initialState.createVehicleLoadSize.response;
      state.createVehicleLoadSize.failed = initialState.createVehicleLoadSize.failed;

      state.updateVehicleLoadSize.request = initialState.updateVehicleLoadSize.request;
      state.updateVehicleLoadSize.response = initialState.updateVehicleLoadSize.response;
      state.updateVehicleLoadSize.failed = initialState.updateVehicleLoadSize.failed;

      state.deleteVehicleLoadSize.request = initialState.deleteVehicleLoadSize.request;
      state.deleteVehicleLoadSize.response = initialState.deleteVehicleLoadSize.response;
      state.deleteVehicleLoadSize.failed = initialState.deleteVehicleLoadSize.failed;

      state.allVehicleLoadSize.request = initialState.allVehicleLoadSize.request;
      state.allVehicleLoadSize.response = initialState.allVehicleLoadSize.response;
      state.allVehicleLoadSize.failed = initialState.allVehicleLoadSize.failed;
    },
    requestCreateVehicleLoadSize: (state) => {

      state.createVehicleLoadSize.request = true
    },
    responseCreateVehicleLoadSize: (state, action) => {

      state.createVehicleLoadSize.response = true;
      state.createVehicleLoadSize.data = action?.payload;
    },
    failedCreateVehicleLoadSize: (state, action) => {

      state.createVehicleLoadSize.failed = true;
      state.createVehicleLoadSize.error = action?.payload;
    },
    requestAllVehicleLoadSize: (state) => {

      state.allVehicleLoadSize.request = true;
    },
    responseAllVehicleLoadSize: (state, action) => {

      state.allVehicleLoadSize.response = true;
      state.allVehicleLoadSize.data = action?.payload;
    },
    failedAllVehicleLoadSize: (state, action) => {

      state.allVehicleLoadSize.failed = true;
      state.allVehicleLoadSize.error = action?.payload;
    },
    responseDeleteVehicleLoadSize: (state, action) => {

      state.deleteVehicleLoadSize.response = true;
      state.deleteVehicleLoadSize.data = action?.payload;

    },
    failedDeleteVehicleLoadSize: (state, action) => {

      state.deleteVehicleLoadSize.failed = true;
      state.deleteVehicleLoadSize.error = action?.payload;
    },
    responseUpdateVehicleLoadSize: (state, action) => {


      state.updateVehicleLoadSize.response = true;
      state.updateVehicleLoadSize.data = action?.payload;

    },
    failedUpdateVehicleLoadSize: (state, action) => {

      state.updateVehicleLoadSize.failed = true;
      state.updateVehicleLoadSize.error = action?.payload;
    },
    requestDeleteVehicleLoadSize: (state) => {

      state.deleteVehicleLoadSize.request = true;
    },
    requestUpdateVehicleLoadSize: (state) => {

      state.updateVehicleLoadSize.request = true;
    }

  },
});
export default VehicleLoadSizeSlice.reducer;
export const {
  resetVehicleLoadSize,
  requestDeleteVehicleLoadSize,
  requestUpdateVehicleLoadSize,
  failedUpdateVehicleLoadSize,
  responseUpdateVehicleLoadSize,
  failedDeleteVehicleLoadSize,
  responseDeleteVehicleLoadSize,
  failedAllVehicleLoadSize,
  failedCreateVehicleLoadSize,
  requestAllVehicleLoadSize,
  requestCreateVehicleLoadSize,
  responseAllVehicleLoadSize,
  responseCreateVehicleLoadSize
} = VehicleLoadSizeSlice.actions;
