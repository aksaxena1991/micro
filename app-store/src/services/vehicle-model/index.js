import ApiFunction from "../APIFunction";
import {
  ADD_VEHICLE_MODEL_API,
  DELETE_GET_UPDATE_VEHICLE_MODEL_API,
  GET_All_VEHICLE_MODEL_API,
  
} from "./constants";

export const createVehicleModelService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_VEHICLE_MODEL_API);
};

export const getAllVehicleModelService = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_VEHICLE_MODEL_API}`);
};
export const deleteVehicleModelService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_VEHICLE_MODEL_API}${params}`);
};
export const updateVehicleModelService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_VEHICLE_MODEL_API}${id}`);
};
