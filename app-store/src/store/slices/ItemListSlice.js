import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allItemListByEOCID: {
    request: false,
    response: false,
    failed: false,
    data: [],
    error: {},
  },

  createItemList: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  updateItemList: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },

  deleteItemList: {
    request: false,
    response: false,
    failed: false,
    data: {},
    error: {},
  },



};
export const ItemListSlice = createSlice({
  name: "itemList",
  initialState,
  reducers: {
    resetItemList: (state) => {
      state.allItemListByEOCID.request = initialState.allItemListByEOCID.request;
      state.allItemListByEOCID.response = initialState.allItemListByEOCID.response;
      state.allItemListByEOCID.failed = initialState.allItemListByEOCID.failed;

      state.createItemList.request = initialState.createItemList.request;
      state.createItemList.response = initialState.createItemList.response;
      state.createItemList.failed = initialState.createItemList.failed;

      state.updateItemList.request = initialState.updateItemList.request;
      state.updateItemList.response = initialState.updateItemList.response;
      state.updateItemList.failed = initialState.updateItemList.failed;

      state.deleteItemList.request = initialState.deleteItemList.request;
      state.deleteItemList.response = initialState.deleteItemList.response;
      state.deleteItemList.failed = initialState.deleteItemList.failed;
    },
    requestCreateItemList: (state) => {

      state.createItemList.request = true;

    },
    responseCreateItemList: (state, action) => {

      state.createItemList.response = true;
      state.createItemList.data = action?.payload;
    },
    failedCreateItemList: (state, action) => {

      state.createItemList.failed = true;
      state.createItemList.error = action?.payload;
    },
    requestAllItemListByEOCID: (state) => {

      state.allItemListByEOCID.request = true;
    },
    responseAllItemListByEOCID: (state, action) => {


      state.allItemListByEOCID.response = true;
      state.allItemListByEOCID.data = action?.payload;
    },
    failedAllItemListByEOCID: (state, action) => {

      state.allItemListByEOCID.failed = true;
      state.allItemListByEOCID.error = action?.payload;
    },
    responseDeleteItemList: (state, action) => {

      state.deleteItemList.response = true;
      state.deleteItemList.data = action?.payload;
    },
    failedDeleteItemList: (state, action) => {

      state.deleteItemList.failed = true;
      state.deleteItemList.error = action?.payload;
    },
    responseUpdateItemList: (state, action) => {

      state.updateItemList.response = true;
      state.updateItemList.data = action?.payload;

    },
    failedUpdateItemList: (state, action) => {

      state.updateItemList.failed = true;
      state.updateItemList.error = action?.payload;
    },
    requestDeleteItemList: (state) => {

      state.deleteItemList.request = true;
    },
    requestUpdateItemList: (state) => {

      state.updateItemList.request = true;
    }

  },
});
export default ItemListSlice.reducer;
export const {
  resetItemList,
  requestDeleteItemList,
  requestUpdateItemList,
  failedUpdateItemList,
  responseUpdateItemList,
  failedDeleteItemList,
  responseDeleteItemList,
  failedAllItemListByEOCID,
  failedCreateItemList,
  requestAllItemListByEOCID,
  requestCreateItemList,
  responseAllItemListByEOCID,
  responseCreateItemList
} = ItemListSlice.actions;
