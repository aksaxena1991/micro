import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allVehicleColor: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },

  createVehicleColor: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  updateVehicleColor: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  deleteVehicleColor: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },



};
export const VehicleColorSlice = createSlice({
  name: "vehicleColor",
  initialState,
  reducers: {
    resetVehicleColor: (state) => {
      state.createVehicleColor.request = initialState.createVehicleColor.request;
      state.createVehicleColor.response = initialState.createVehicleColor.response;
      state.createVehicleColor.failed = initialState.createVehicleColor.failed;

      state.updateVehicleColor.request = initialState.updateVehicleColor.request;
      state.updateVehicleColor.response = initialState.updateVehicleColor.response;
      state.updateVehicleColor.failed = initialState.updateVehicleColor.failed;

      state.deleteVehicleColor.request = initialState.deleteVehicleColor.request;
      state.deleteVehicleColor.response = initialState.deleteVehicleColor.response;
      state.deleteVehicleColor.failed = initialState.deleteVehicleColor.failed;

      state.allVehicleColor.request = initialState.allVehicleColor.request;
      state.allVehicleColor.response = initialState.allVehicleColor.response;
      state.allVehicleColor.failed = initialState.allVehicleColor.failed;
    },
    requestCreateVehicleColor: (state) => {

      state.createVehicleColor.request = true;
    },
    responseCreateVehicleColor: (state, action) => {

      state.createVehicleColor.response = true;
      state.createVehicleColor.data = action?.payload;
    },
    failedCreateVehicleColor: (state, action) => {

      state.createVehicleColor.failed = true;
      state.createVehicleColor.error = action?.payload;
    },
    requestAllVehicleColor: (state) => {

      state.allVehicleColor.request = true;
    },
    responseAllVehicleColor: (state, action) => {

      state.allVehicleColor.response = true;
      state.allVehicleColor.data = action?.payload;

    },
    failedAllVehicleColor: (state, action) => {

      state.allVehicleColor.failed = true;
      state.allVehicleColor.error = action?.payload;
    },
    responseDeleteVehicleColor: (state, action) => {

      state.deleteVehicleColor.response = true
      state.deleteVehicleColor.data = action?.payload;

    },
    failedDeleteVehicleColor: (state, action) => {

      state.deleteVehicleColor.failed = true;
      state.deleteVehicleColor.error = action?.payload;
    },
    responseUpdateVehicleColor: (state, action) => {

      state.updateVehicleColor.response = true;
      state.updateVehicleColor.data = action?.payload;

    },
    failedUpdateVehicleColor: (state, action) => {

      state.updateVehicleColor.failed = true;
      state.updateVehicleColor.error = action?.payload;
    },
    requestDeleteVehicleColor: (state) => {

      state.deleteVehicleColor.request = true;
    },
    requestUpdateVehicleColor: (state) => {

      state.updateVehicleColor.request = true;
    }

  },
});
export default VehicleColorSlice.reducer;
export const {
  resetVehicleColor,
  requestDeleteVehicleColor,
  requestUpdateVehicleColor,
  failedUpdateVehicleColor,
  responseUpdateVehicleColor,
  failedDeleteVehicleColor,
  responseDeleteVehicleColor,
  failedAllVehicleColor,
  failedCreateVehicleColor,
  requestAllVehicleColor,
  requestCreateVehicleColor,
  responseAllVehicleColor,
  responseCreateVehicleColor
} = VehicleColorSlice.actions;
