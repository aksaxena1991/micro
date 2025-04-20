import ApiFunction from "../APIFunction";
import {
  ADD_VEHICLE_COMPANY_API,
  DELETE_GET_UPDATE_VEHICLE_COMPANY_API,
  GET_All_VEHICLE_COMPANY_API,
  
} from "./constants";

export const createVehicleCompanyService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_VEHICLE_COMPANY_API);
};

export const getAllVehicleCompanyService = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_VEHICLE_COMPANY_API}`);
};
export const deleteVehicleCompanyService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_VEHICLE_COMPANY_API}${params}`);
};
export const updateVehicleCompanyService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_VEHICLE_COMPANY_API}${id}`);
};
