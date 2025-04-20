import ApiFunction from "../APIFunction";
import {
  ADD_ITEM_LIST_API, DELETE_GET_UPDATE_ITEM_LIST_API, GET_All_ITEM_LIST_API
} from "./constants";

export const createItemListService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_ITEM_LIST_API);
};

export const getAllItemListService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_ITEM_LIST_API}${params}`);
};
export const deleteItemListService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_ITEM_LIST_API}${params}`);
};
export const updateItemListService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_ITEM_LIST_API}${id}`);
};
