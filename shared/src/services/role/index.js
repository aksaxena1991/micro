import ApiFunction from "../APIFunction";
import {
  ADD_ROLE_API,
  DELETE_GET_UPDATE_ROLE_API,
  GET_All_ROLE_API,
  GET_PARENT_ROLE_API,
} from "./constants";

export const createRoleService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_ROLE_API);
};
export const getAllParentRoleService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_PARENT_ROLE_API}${params}`);
};
export const getAllRoleService = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_ROLE_API}`);
};
export const deleteRoleService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_ROLE_API}${params}`);
};
export const updateRoleService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_ROLE_API}${id}`);
};
