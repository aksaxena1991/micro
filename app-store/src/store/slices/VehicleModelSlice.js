import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allVehicleModel: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },

  createVehicleModel: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  updateVehicleModel: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  deleteVehicleModel: {

    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },



};
export const VehicleModelSlice = createSlice({
  name: "vehicleModel",
  initialState,
  reducers: {
    resetVehicleModel: (state) => {
      state.createVehicleModel.request = initialState.createVehicleModel.request;
      state.createVehicleModel.response = initialState.createVehicleModel.response;
      state.createVehicleModel.failed = initialState.createVehicleModel.failed;

      state.updateVehicleModel.request = initialState.updateVehicleModel.request;
      state.updateVehicleModel.response = initialState.updateVehicleModel.response;
      state.updateVehicleModel.failed = initialState.updateVehicleModel.failed;

      state.deleteVehicleModel.request = initialState.deleteVehicleModel.request;
      state.deleteVehicleModel.response = initialState.deleteVehicleModel.response;
      state.deleteVehicleModel.failed = initialState.deleteVehicleModel.failed;

      state.allVehicleModel.request = initialState.allVehicleModel.request;
      state.allVehicleModel.response = initialState.allVehicleModel.response;
      state.allVehicleModel.failed = initialState.allVehicleModel.failed;
    },
    requestCreateVehicleModel: (state) => {

      state.createVehicleModel.request = true
    },
    responseCreateVehicleModel: (state, action) => {
      state.createVehicleModel.response = true;
      state.createVehicleModel.data = action?.payload;
    },
    failedCreateVehicleModel: (state, action) => {

      state.createVehicleModel.failed = true;
      state.createVehicleModel.error = action?.payload;

    },
    requestAllVehicleModel: (state) => {

      state.allVehicleModel.request = true;
    },
    responseAllVehicleModel: (state, action) => {

      state.allVehicleModel.response = true;
      state.allVehicleModel.data = action?.payload;
    },
    failedAllVehicleModel: (state, action) => {

      state.allVehicleModel.failed = true;
      state.allVehicleModel.error = action?.payload;
    },
    responseDeleteVehicleModel: (state, action) => {

      state.deleteVehicleModel.response = true;
      state.deleteVehicleModel.data = action?.payload;

    },
    failedDeleteVehicleModel: (state, action) => {

      state.deleteVehicleModel.failed = true;
      state.deleteVehicleModel.error = action?.payload;
    },
    responseUpdateVehicleModel: (state, action) => {

      state.updateVehicleModel.response = true;
      state.updateVehicleModel.data = action?.payload;

    },
    failedUpdateVehicleModel: (state, action) => {

      state.updateVehicleModel.failed = true;
      state.updateVehicleModel.error = action?.payload;
    },
    requestDeleteVehicleModel: (state) => {

      state.deleteVehicleModel.request = true
    },
    requestUpdateVehicleModel: (state) => {

      state.updateVehicleModel.request = true
    }

  },
});
export default VehicleModelSlice.reducer;
export const {
  resetVehicleModel,
  requestDeleteVehicleModel,
  requestUpdateVehicleModel,
  failedUpdateVehicleModel,
  responseUpdateVehicleModel,
  failedDeleteVehicleModel,
  responseDeleteVehicleModel,
  failedAllVehicleModel,
  failedCreateVehicleModel,
  requestAllVehicleModel,
  requestCreateVehicleModel,
  responseAllVehicleModel,
  responseCreateVehicleModel
} = VehicleModelSlice.actions;
