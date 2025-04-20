import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allCityStatePincodeCountry: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  }
};

export const UtilsSlice = createSlice({
  name: "Utils",
  initialState,
  reducers: {
    requestAllCityStatePincodeCountry: (state) => {
      state.allCityStatePincodeCountry.request = true;

    },
    responseAllCityStatePincodeCountry: (state, action) => {

      state.allCityStatePincodeCountry.response = true;
      state.allCityStatePincodeCountry.data = action?.payload;
    },
    failedAllCityStatePincodeCountry: (state, action) => {
      state.allCityStatePincodeCountry.failed = true;
      state.allCityStatePincodeCountry.error = action?.payload;
    }


  },
});
export default UtilsSlice.reducer;
export const {
  requestAllCityStatePincodeCountry,
  responseAllCityStatePincodeCountry,
  failedAllCityStatePincodeCountry,
} = UtilsSlice.actions;
