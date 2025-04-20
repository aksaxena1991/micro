import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allVehicleInsuranceCompanies: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },

  createVehicleInsuranceCompany: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  updateVehicleInsuranceCompany: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  deleteVehicleInsuranceCompany: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },



};
export const VehicleInsuranceCompanySlice = createSlice({
  name: "vehicleInsuranceCompany",
  initialState,
  reducers: {
    resetVehicleInsuranceCompany: (state) => {
      state.createVehicleInsuranceCompany.request = initialState.createVehicleInsuranceCompany.request;
      state.createVehicleInsuranceCompany.response = initialState.createVehicleInsuranceCompany.response;
      state.createVehicleInsuranceCompany.failed = initialState.createVehicleInsuranceCompany.failed;

      state.updateVehicleInsuranceCompany.request = initialState.updateVehicleInsuranceCompany.request;
      state.updateVehicleInsuranceCompany.response = initialState.updateVehicleInsuranceCompany.response;
      state.updateVehicleInsuranceCompany.failed = initialState.updateVehicleInsuranceCompany.failed;

      state.deleteVehicleInsuranceCompany.request = initialState.deleteVehicleInsuranceCompany.request;
      state.deleteVehicleInsuranceCompany.response = initialState.deleteVehicleInsuranceCompany.response;
      state.deleteVehicleInsuranceCompany.failed = initialState.deleteVehicleInsuranceCompany.failed;

      state.deleteVehicleInsuranceCompany.request = initialState.deleteVehicleInsuranceCompany.request;
      state.deleteVehicleInsuranceCompany.failed = initialState.deleteVehicleInsuranceCompany.failed;
      state.deleteVehicleInsuranceCompany.response = initialState.deleteVehicleInsuranceCompany.response;
    },
    requestCreateVehicleInsuranceCompany: (state) => {

      state.createVehicleInsuranceCompany.request = true;
    },
    responseCreateVehicleInsuranceCompany: (state, action) => {
      state.createVehicleInsuranceCompany.response = true;
      state.createVehicleInsuranceCompany.data = action?.payload;
    },
    failedCreateVehicleInsuranceCompany: (state, action) => {

      state.createVehicleInsuranceCompany.failed = true;
      state.createVehicleInsuranceCompany.error = action?.payload;
    },
    requestAllVehicleInsuranceCompany: (state) => {

      state.allVehicleInsuranceCompanies.request = true;
    },
    responseAllVehicleInsuranceCompany: (state, action) => {

      state.allVehicleInsuranceCompanies.response = true;
      state.allVehicleInsuranceCompanies.data = action?.payload;

    },
    failedAllVehicleInsuranceCompany: (state, action) => {

      state.allVehicleInsuranceCompanies.failed = true;
      state.allVehicleInsuranceCompanies.error = action?.payload
    },
    responseDeleteVehicleInsuranceCompany: (state, action) => {

      state.deleteVehicleInsuranceCompany.response = true;
      state.deleteVehicleInsuranceCompany.data = action.payload

    },
    failedDeleteVehicleInsuranceCompany: (state, action) => {

      state.deleteVehicleInsuranceCompany.failed = true;
      state.deleteVehicleInsuranceCompany.error = action?.payload
    },
    responseUpdateVehicleInsuranceCompany: (state, action) => {


      state.updateVehicleInsuranceCompany.response = true;
      state.updateVehicleInsuranceCompany.data = action?.payload;
    },
    failedUpdateVehicleInsuranceCompany: (state, action) => {

      state.updateVehicleInsuranceCompany.failed = true;
      state.updateVehicleInsuranceCompany.error = action?.payload;
    },
    requestDeleteVehicleInsuranceCompany: (state) => {

      state.deleteVehicleInsuranceCompany.request = true;
    },
    requestUpdateVehicleInsuranceCompany: (state) => {

      state.updateVehicleInsuranceCompany.request = true;
    }

  },
});
export default VehicleInsuranceCompanySlice.reducer;
export const {
  resetVehicleInsuranceCompany,
  requestDeleteVehicleInsuranceCompany,
  requestUpdateVehicleInsuranceCompany,
  failedUpdateVehicleInsuranceCompany,
  responseUpdateVehicleInsuranceCompany,
  failedDeleteVehicleInsuranceCompany,
  responseDeleteVehicleInsuranceCompany,
  failedAllVehicleInsuranceCompany,
  failedCreateVehicleInsuranceCompany,
  requestAllVehicleInsuranceCompany,
  requestCreateVehicleInsuranceCompany,
  responseAllVehicleInsuranceCompany,
  responseCreateVehicleInsuranceCompany
} = VehicleInsuranceCompanySlice.actions;
