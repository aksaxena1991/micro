import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allVehicleByCompanyIdOrBrFrId: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },
  createVehicle: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  deleteVehicle: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
  updateVehicle: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
};
export const VehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    resetVehicle: (state) => {
      state.allVehicleByCompanyIdOrBrFrId.request =
        initialState.allVehicleByCompanyIdOrBrFrId.request;
      state.allVehicleByCompanyIdOrBrFrId.response =
        initialState.allVehicleByCompanyIdOrBrFrId.response;
      state.allVehicleByCompanyIdOrBrFrId.failed =
        initialState.allVehicleByCompanyIdOrBrFrId.failed;

      state.createVehicle.request =
        initialState.createVehicle.request;
      state.createVehicle.response =
        initialState.createVehicle.response;
      state.createVehicle.failed = initialState.createVehicle.failed;

      state.deleteVehicle.request =
        initialState.deleteVehicle.request;
      state.deleteVehicle.response =
        initialState.deleteVehicle.response;

      state.updateVehicle.request =
        initialState.updateVehicle.request;
      state.updateVehicle.response =
        initialState.updateVehicle.response;
    },
    requestCreateVehicle: (state) => {
      state.createVehicle.request = true;
    },
    responseCreateVehicle: (state, action) => {
      state.createVehicle.response = true;
      state.createVehicle.data = action?.payload;
    },
    failedCreateVehicle: (state, action) => {
      state.createVehicle.failed = true;
      state.createVehicle.error = action?.payload;
    },
    requestAllVehicleByCompanyIdOrBrFrId: (state) => {
      state.allVehicleByCompanyIdOrBrFrId.request = true;
    },
    responseAllVehicleByCompanyIdOrBrFrId: (state, action) => {
      state.allVehicleByCompanyIdOrBrFrId.response = true;
      state.allVehicleByCompanyIdOrBrFrId.data = action?.payload;
    },
    failedAllVehicleByCompanyIdOrBrFrId: (state, action) => {
      state.allVehicleByCompanyIdOrBrFrId.failed = true;
      state.allVehicleByCompanyIdOrBrFrId.error = action?.payload;
    },
    responseDeleteVehicle: (state, action) => {
      state.deleteVehicle.response = true;
      state.deleteVehicle.data = action?.payload;
    },
    failedDeleteVehicle: (state, action) => {
      state.deleteVehicle.failed = true;
      state.deleteVehicle.error = action?.payload;
    },
    responseUpdateVehicle: (state, action) => {
      state.updateVehicle.response = true;
      state.updateVehicle.data = action?.payload;
    },
    failedUpdateVehicle: (state, action) => {
      state.updateVehicle.failed = true;
      state.updateVehicle.error = action?.payload;
    },
    requestDeleteVehicle: (state) => {
      state.deleteVehicle.request = true;
    },
    requestUpdateVehicle: (state) => {
      state.updateVehicle.request = true;
    },
  },
});
export default VehicleSlice.reducer;
export const {
  requestAllVehicleByCompanyIdOrBrFrId,
  responseAllVehicleByCompanyIdOrBrFrId,
  failedAllVehicleByCompanyIdOrBrFrId,
  resetVehicle,
  requestDeleteVehicle,
  requestUpdateVehicle,
  failedUpdateVehicle,
  responseUpdateVehicle,
  failedDeleteVehicle,
  responseDeleteVehicle,
  failedAllVehicle,
  failedCreateVehicle,
  requestAllVehicle,
  requestCreateVehicle,
  responseAllVehicle,
  responseCreateVehicle,
} = VehicleSlice.actions;
