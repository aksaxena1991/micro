import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allFloor: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },

  createFloor: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  updateFloor: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  deleteFloor: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },
};
export const FloorSlice = createSlice({
  name: "floor",
  initialState,
  reducers: {
    resetFloor: (state) => {
      state.allFloor.request = initialState.allFloor.request;

      state.allFloor.response = initialState.allFloor.response;
      state.allFloor.failed = initialState.allFloor.failed;

      state.createFloor.request = initialState.createFloor.request;
      state.createFloor.response = initialState.createFloor.response;
      state.createFloor.failed = initialState.createFloor.failed;

      state.updateFloor.request = initialState.updateFloor.request;
      state.updateFloor.response = initialState.updateFloor.response;
      state.updateFloor.failed = initialState.updateFloor.failed;

      state.deleteFloor.request = initialState.deleteFloor.request;
      state.deleteFloor.response = initialState.deleteFloor.response;
      state.deleteFloor.failed = initialState.deleteFloor.failed;
    },
    requestCreateFloor: (state) => {
      state.createFloor.request = true;
    },
    responseCreateFloor: (state, action) => {
      state.createFloor.response = true;
      state.createFloor.data = action?.payload;
    },
    failedCreateFloor: (state, action) => {
      state.createFloor.failed = true;
      state.createFloor.error = action?.payload;
    },
    requestAllFloor: (state) => {
      state.allFloor.request = true;
    },
    responseAllFloor: (state, action) => {
      state.allFloor.response = true;
      state.allFloor.data = action?.payload;
    },
    failedAllFloor: (state, action) => {
      state.allFloor.failed = true;
      state.allFloor.error = action?.payload;
    },
    responseDeleteFloor: (state) => {
      state.deleteFloor.response = true;
    },
    failedDeleteFloor: (state, action) => {
      state.deleteFloor.failed = true;
      state.deleteFloor.error = action?.payload;
    },
    responseUpdateFloor: (state, action) => {
      state.updateFloor.response = true;
      state.updateFloor.data = action?.payload;
    },
    failedUpdateFloor: (state, action) => {
      state.updateFloor.failed = true;
      state.updateFloor.error = action?.payload;
    },
    requestDeleteFloor: (state) => {
      state.deleteFloor.request = true;
    },
    requestUpdateFloor: (state) => {
      state.updateFloor.request = true;
    },
  },
});
export default FloorSlice.reducer;
export const {
  resetFloor,
  requestDeleteFloor,
  requestUpdateFloor,
  failedUpdateFloor,
  responseUpdateFloor,
  failedDeleteFloor,
  responseDeleteFloor,
  failedAllFloor,
  failedCreateFloor,
  requestAllFloor,
  requestCreateFloor,
  responseAllFloor,
  responseCreateFloor,
} = FloorSlice.actions;
