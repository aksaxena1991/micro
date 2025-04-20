import ApiFunction from "../APIFunction";
import {
  ADD_SHIFTING_TYPE_API,
  DELETE_GET_UPDATE_SHIFTING_TYPE_API, GET_All_SHIFTING_TYPE_API
} from "./constants";

export const createShiftingTypeService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_SHIFTING_TYPE_API);
};

export const getAllShiftingTypeService = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_SHIFTING_TYPE_API}`);
};
export const deleteShiftingTypeService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_SHIFTING_TYPE_API}${params}`);
};
export const updateShiftingTypeService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_SHIFTING_TYPE_API}${id}`);
};
