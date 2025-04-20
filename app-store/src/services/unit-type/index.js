import ApiFunction from "../APIFunction";
import {
  ADD_UNIT_TYPE_API,
  DELETE_GET_UPDATE_UNIT_TYPE_API,
  GET_All_UNIT_TYPE_API
} from "./constants";

export const createUnitTypeService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_UNIT_TYPE_API);
};

export const getAllUnitTypeService = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_UNIT_TYPE_API}`);
};
export const deleteUnitTypeService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_UNIT_TYPE_API}${params}`);
};
export const updateUnitTypeService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_UNIT_TYPE_API}${id}`);
};
