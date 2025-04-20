import ApiFunction from "../APIFunction";
import {
  ADD_MODULE_API,
  DELETE_GET_UPDATE_MODULE_API,
  GET_All_MODULE_API,
  GET_SUB_MODULE_API,
} from "./constants";

export const createModuleService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_MODULE_API);
};
export const getAllSubModuleService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_SUB_MODULE_API}${params}`);
};
export const getAllModuleService = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_MODULE_API}`);
};
export const deleteModuleService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_MODULE_API}${params}`);
};
export const updateModuleService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(
    params,
    `${DELETE_GET_UPDATE_MODULE_API}${id}`,
  );
};
