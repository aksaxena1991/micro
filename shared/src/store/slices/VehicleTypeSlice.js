import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allVehicleType: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },

  createVehicleType: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  updateVehicleType: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  deleteVehicleType: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },




};
export const VehicleTypeSlice = createSlice({
  name: "vehicleType",
  initialState,
  reducers: {
    resetVehicleType: (state) => {

      state.allVehicleType.request = initialState.allVehicleType.request;
      state.allVehicleType.response = initialState.allVehicleType.response;
      state.allVehicleType.failed = initialState.allVehicleType.failed;

      state.createVehicleType.request = initialState.createVehicleType.request;
      state.createVehicleType.response = initialState.createVehicleType.response;
      state.createVehicleType.failed = initialState.createVehicleType.failed;

      state.updateVehicleType.request = initialState.updateVehicleType.request;
      state.updateVehicleType.response = initialState.updateVehicleType.response;
      state.updateVehicleType.failed = initialState.updateVehicleType.failed;

      state.deleteVehicleType.request = initialState.deleteVehicleType.request;
      state.deleteVehicleType.response = initialState.deleteVehicleType.response;
      state.deleteVehicleType.failed = initialState.deleteVehicleType.failed;
    },
    requestCreateVehicleType: (state) => {

      state.createVehicleType.request = true

    },
    responseCreateVehicleType: (state, action) => {

      state.createVehicleType.response = true;
      state.createVehicleType.data = action?.payload;
    },
    failedCreateVehicleType: (state, action) => {

      state.createVehicleType.failed = true;
      state.createVehicleType.error = action?.payload;
    },
    requestAllVehicleType: (state) => {

      state.allVehicleType.request = true;
    },
    responseAllVehicleType: (state, action) => {

      state.allVehicleType.response = true;
      state.allVehicleType.data = action?.payload;
    },
    failedAllVehicleType: (state, action) => {

      state.allVehicleType.failed = true;
      state.allVehicleType.error = action?.payload;
    },
    responseDeleteVehicleType: (state, action) => {

      state.deleteVehicleType.response = true;
      state.deleteVehicleType.data = action?.payload;
    },
    failedDeleteVehicleType: (state, action) => {

      state.deleteVehicleType.failed = true;
      state.deleteVehicleType.error = action?.payload;
    },
    responseUpdateVehicleType: (state, action) => {

      state.updateVehicleType.response = true;
      state.updateVehicleType.data = action?.payload;

    },
    failedUpdateVehicleType: (state, action) => {

      state.updateVehicleType.failed = true;
      state.updateVehicleType.error = action?.payload;
    },
    requestDeleteVehicleType: (state) => {

      state.deleteVehicleType.request = true
    },
    requestUpdateVehicleType: (state) => {

      state.updateVehicleType.request = true
    }

  },
});
export default VehicleTypeSlice.reducer;
export const {
  resetVehicleType,
  requestDeleteVehicleType,
  requestUpdateVehicleType,
  failedUpdateVehicleType,
  responseUpdateVehicleType,
  failedDeleteVehicleType,
  responseDeleteVehicleType,
  failedAllVehicleType,
  failedCreateVehicleType,
  requestAllVehicleType,
  requestCreateVehicleType,
  responseAllVehicleType,
  responseCreateVehicleType
} = VehicleTypeSlice.actions;
