import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allPackingMaterial: [],

  requestCreatePackingMaterial: false,
  responseCreatePackingMaterial: false,
  failedCreatePackingMaterial: false,
  requestUpdatePackingMaterial: false,
  responseUpdatePackingMaterial: false,
  failedUpdatePackingMaterial: false,
  requestDeletePackingMaterial: false,
  responseDeletePackingMaterial: false,
  failedDeletePackingMaterial: false,
  requestAllPackingMaterialByEOCID: false,
  responseAllPackingMaterialByEOCID: false,
  failedAllPackingMaterialByEOCID: false,
  error: {}


};
export const PackingMaterialSlice = createSlice({
  name: "packingMaterial",
  initialState,
  reducers: {
    reset: (state) => {
      state.requestCreatePackingMaterial = false;
      state.responseCreatePackingMaterial = false;
      state.failedCreatePackingMaterial = false;
      state.requestUpdatePackingMaterial = false;
      state.responseUpdatePackingMaterial = false;
      state.failedUpdatePackingMaterial = false;
      state.requestDeletePackingMaterial = false;
      state.responseDeletePackingMaterial = false;
      state.failedDeletePackingMaterial = false;
      state.requestAllPackingMaterialByEOCID = false;
      state.responseAllPackingMaterialByEOCID = false;
      state.failedAllPackingMaterialByEOCID = false;
      state.error = {}
    },
    requestCreatePackingMaterial: (state) => {

      state.requestCreatePackingMaterial = true;
    },
    responseCreatePackingMaterial: (state) => {
      state.responseCreatePackingMaterial = true;
    },
    failedCreatePackingMaterial: (state, action) => {
      state.failedCreatePackingMaterial = true;
      state.error = action?.payload;
    },
    requestAllPackingMaterialByEOCID: (state) => {
      state.requestAllPackingMaterialByEOCID = true;
    },
    responseAllPackingMaterialByEOCID: (state, action) => {
      state.responseAllPackingMaterialByEOCID = true;
      state.allPackingMaterial = action?.payload;
    },
    failedAllPackingMaterialByEOCID: (state, action) => {
      state.failedAllPackingMaterialByEOCID = true;
      state.error = action?.payload;
    },
    responseDeletePackingMaterial: (state) => {
      state.responseDeletePackingMaterial = true;

    },
    failedDeletePackingMaterial: (state, action) => {
      state.failedDeletePackingMaterial = true;
      state.error = action?.payload;
    },
    responseUpdatePackingMaterial: (state) => {
      state.responseUpdatePackingMaterial = true;

    },
    failedUpdatePackingMaterial: (state, action) => {
      state.failedUpdatePackingMaterial = true;
      state.error = action?.payload;
    },
    requestDeletePackingMaterial: (state) => {
      state.requestDeletePackingMaterial = true;
    },
    requestUpdatePackingMaterial: (state) => {
      state.requestUpdatePackingMaterial = true;
    }

  },
});
export default PackingMaterialSlice.reducer;
export const {
  reset,
  requestDeletePackingMaterial,
  requestUpdatePackingMaterial,
  failedUpdatePackingMaterial,
  responseUpdatePackingMaterial,
  failedDeletePackingMaterial,
  responseDeletePackingMaterial,
  failedAllPackingMaterialByEOCID,
  failedCreatePackingMaterial,
  requestAllPackingMaterialByEOCID,
  requestCreatePackingMaterial,
  responseAllPackingMaterialByEOCID,
  responseCreatePackingMaterial
} = PackingMaterialSlice.actions;
