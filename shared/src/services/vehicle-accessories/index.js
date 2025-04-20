import ApiFunction from "../APIFunction";
import {
  ADD_VEHICLE_ACCESSORIES_API,
  DELETE_GET_UPDATE_VEHICLE_ACCESSORIES_API,
  GET_All_VEHICLE_ACCESSORIES_API,
  
} from "./constants";

export const createVehicleAccessoriesService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_VEHICLE_ACCESSORIES_API);
};

export const getAllVehicleAccessoriesService = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_VEHICLE_ACCESSORIES_API}`);
};
export const deleteVehicleAccessoriesService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_VEHICLE_ACCESSORIES_API}${params}`);
};
export const updateVehicleAccessoriesService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_VEHICLE_ACCESSORIES_API}${id}`);
};
