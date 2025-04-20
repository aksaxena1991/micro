import ApiFunction from "../APIFunction";
import {
  ADD_FLOOR_API,
  DELETE_GET_UPDATE_FLOOR_API, GET_All_FLOOR_API
} from "./constants";

export const createFloorService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_FLOOR_API);
};

export const getAllFloorService = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_FLOOR_API}`);
};
export const deleteFloorService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_FLOOR_API}${params}`);
};
export const updateFloorService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_FLOOR_API}${id}`);
};
