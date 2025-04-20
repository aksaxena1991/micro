import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allVehicleCompanies: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },

  createVehicleCompany: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  updateVehicleCompany: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  deleteVehicleCompany: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },



};
export const VehicleCompanySlice = createSlice({
  name: "vehicleCompany",
  initialState,
  reducers: {
    resetVehicleCompany: (state) => {
      state.createVehicleCompany.request = initialState.createVehicleCompany.request;
      state.createVehicleCompany.response = initialState.createVehicleCompany.response;
      state.createVehicleCompany.failed = initialState.createVehicleCompany.failed;

      state.updateVehicleCompany.request = initialState.updateVehicleCompany.request;
      state.updateVehicleCompany.response = initialState.updateVehicleCompany.response;
      state.updateVehicleCompany.failed = initialState.updateVehicleCompany.failed;

      state.deleteVehicleCompany.request = initialState.deleteVehicleCompany.request;
      state.deleteVehicleCompany.response = initialState.deleteVehicleCompany.response;
      state.deleteVehicleCompany.failed = initialState.deleteVehicleCompany.failed;

      state.allVehicleCompanies.request = initialState.allVehicleCompanies.request;
      state.allVehicleCompanies.response = initialState.allVehicleCompanies.response;
      state.allVehicleCompanies.failed = initialState.allVehicleCompanies.failed;
    },
    requestCreateVehicleCompany: (state) => {

      state.createVehicleCompany.request = true;
    },
    responseCreateVehicleCompany: (state, action) => {

      state.createVehicleCompany.response = true;
      state.createVehicleCompany.data = action?.payload;
    },
    failedCreateVehicleCompany: (state, action) => {

      state.createVehicleCompany.failed = true;
      state.createVehicleCompany.error = action?.payload;
    },
    requestAllVehicleCompany: (state) => {

      state.allVehicleCompanies.request = true;
    },
    responseAllVehicleCompany: (state, action) => {

      state.allVehicleCompanies.response = true;
      state.allVehicleCompanies.data = action?.payload;
    },
    failedAllVehicleCompany: (state, action) => {

      state.allVehicleCompanies.failed = true;
      state.allVehicleCompanies.error = action?.payload;
    },
    responseDeleteVehicleCompany: (state, action) => {

      state.deleteVehicleCompany.response = true;
      state.deleteVehicleCompany.data = action?.payload;

    },
    failedDeleteVehicleCompany: (state, action) => {

      state.deleteVehicleCompany.failed = true;
      state.deleteVehicleCompany.error = action?.payload;
    },
    responseUpdateVehicleCompany: (state, action) => {

      state.updateVehicleCompany.response = true;
      state.updateVehicleCompany.data = action?.payload;

    },
    failedUpdateVehicleCompany: (state, action) => {

      state.updateVehicleCompany.failed = true;
      state.updateVehicleCompany.error = action?.payload;
    },
    requestDeleteVehicleCompany: (state) => {

      state.deleteVehicleCompany.request = true;
    },
    requestUpdateVehicleCompany: (state) => {

      state.updateVehicleCompany.request = true;
    }

  },
});
export default VehicleCompanySlice.reducer;
export const {
  resetVehicleCompany,
  requestDeleteVehicleCompany,
  requestUpdateVehicleCompany,
  failedUpdateVehicleCompany,
  responseUpdateVehicleCompany,
  failedDeleteVehicleCompany,
  responseDeleteVehicleCompany,
  failedAllVehicleCompany,
  failedCreateVehicleCompany,
  requestAllVehicleCompany,
  requestCreateVehicleCompany,
  responseAllVehicleCompany,
  responseCreateVehicleCompany
} = VehicleCompanySlice.actions;
