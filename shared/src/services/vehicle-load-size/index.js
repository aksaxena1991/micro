import ApiFunction from "../APIFunction";
import {
  ADD_VEHICLE_LOAD_SIZE_API,
  DELETE_GET_UPDATE_VEHICLE_LOAD_SIZE_API,
  GET_All_VEHICLE_LOAD_SIZE_API,
  
} from "./constants";

export const createVehicleLoadSizeService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_VEHICLE_LOAD_SIZE_API);
};

export const getAllVehicleLoadSizeService = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_VEHICLE_LOAD_SIZE_API}`);
};
export const deleteVehicleLoadSizeService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_VEHICLE_LOAD_SIZE_API}${params}`);
};
export const updateVehicleLoadSizeService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_VEHICLE_LOAD_SIZE_API}${id}`);
};
