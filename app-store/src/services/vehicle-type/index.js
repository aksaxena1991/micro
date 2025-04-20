import ApiFunction from "../APIFunction";
import {
  ADD_VEHICLE_TYPE_API,
  DELETE_GET_UPDATE_VEHICLE_TYPE_API,
  GET_All_VEHICLE_TYPE_API,
  
} from "./constants";

export const createVehicleTypeService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_VEHICLE_TYPE_API);
};

export const getAllVehicleTypeService = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_VEHICLE_TYPE_API}`);
};
export const deleteVehicleTypeService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_VEHICLE_TYPE_API}${params}`);
};
export const updateVehicleTypeService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_VEHICLE_TYPE_API}${id}`);
};
