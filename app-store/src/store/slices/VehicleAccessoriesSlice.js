import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allVehicleAccessories: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },

  createVehicleAccessories: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  updateVehicleAccessories: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  deleteVehicleAccessories: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },



};
export const VehicleAccessoriesSlice = createSlice({
  name: "vehicleAccessories",
  initialState,
  reducers: {
    resetVehicleAccessories: (state) => {
      state.createVehicleAccessories.request = initialState.createVehicleAccessories.request;
      state.createVehicleAccessories.response = initialState.createVehicleAccessories.response;
      state.createVehicleAccessories.failed = initialState.createVehicleAccessories.failed;

      state.updateVehicleAccessories.request = initialState.updateVehicleAccessories.request;
      state.updateVehicleAccessories.response = initialState.updateVehicleAccessories.response;
      state.updateVehicleAccessories.failed = initialState.updateVehicleAccessories.failed;

      state.deleteVehicleAccessories.request = initialState.deleteVehicleAccessories.request;
      state.deleteVehicleAccessories.response = initialState.deleteVehicleAccessories.response;
      state.deleteVehicleAccessories.failed = initialState.deleteVehicleAccessories.failed;

      state.allVehicleAccessories.request = initialState.allVehicleAccessories.request;
      state.allVehicleAccessories.response = initialState.allVehicleAccessories.response;
      state.allVehicleAccessories.failed = initialState.allVehicleAccessories.failed;

    },
    requestCreateVehicleAccessories: (state) => {

      state.createVehicleAccessories.request = true;
    },
    responseCreateVehicleAccessories: (state, action) => {

      state.createVehicleAccessories.response = true;
      state.createVehicleAccessories.data = action?.payload;
    },
    failedCreateVehicleAccessories: (state, action) => {

      state.createVehicleAccessories.failed = true;
      state.createVehicleAccessories.error = action?.payload;
    },
    requestAllVehicleAccessories: (state) => {

      state.allVehicleAccessories.request = true;
    },
    responseAllVehicleAccessories: (state, action) => {

      state.allVehicleAccessories.response = true;
      state.allVehicleAccessories.data = action?.payload;
    },
    failedAllVehicleAccessories: (state, action) => {

      state.allVehicleAccessories.failed = true;
      state.allVehicleAccessories.error = action?.payload;
    },
    responseDeleteVehicleAccessories: (state, action) => {

      state.deleteVehicleAccessories.response = true;
      state.deleteVehicleAccessories.data = action?.payload;

    },
    failedDeleteVehicleAccessories: (state, action) => {

      state.deleteVehicleAccessories.failed = true;
      state.deleteVehicleAccessories.error = action?.payload;
    },
    responseUpdateVehicleAccessories: (state, action) => {

      state.updateVehicleAccessories.response = true;
      state.updateVehicleAccessories.data = action?.payload;

    },
    failedUpdateVehicleAccessories: (state, action) => {

      state.updateVehicleAccessories.failed = true;
      state.updateVehicleAccessories.error = action?.payload;
    },
    requestDeleteVehicleAccessories: (state) => {

      state.deleteVehicleAccessories.request = true;
    },
    requestUpdateVehicleAccessories: (state) => {
      state.updateVehicleAccessories.request = true;
    }

  },
});
export default VehicleAccessoriesSlice.reducer;
export const {
  resetVehicleAccessories,
  requestDeleteVehicleAccessories,
  requestUpdateVehicleAccessories,
  failedUpdateVehicleAccessories,
  responseUpdateVehicleAccessories,
  failedDeleteVehicleAccessories,
  responseDeleteVehicleAccessories,
  failedAllVehicleAccessories,
  failedCreateVehicleAccessories,
  requestAllVehicleAccessories,
  requestCreateVehicleAccessories,
  responseAllVehicleAccessories,
  responseCreateVehicleAccessories
} = VehicleAccessoriesSlice.actions;
