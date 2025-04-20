import { convertJsonToQueryParams } from "../../utils";
import ApiFunction from "../APIFunction";
import { ADD_VEHICLE_API, DELETE_GET_UPDATE_VEHICLE_API, GET_All_VEHICLE_BY_COMPANY_ID_OR_BRFR_ID_API } from "./constants";

export const createVehicleService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_VEHICLE_API);
};

export const getAllVehicleByCompanyIDOrBrFrIDService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_VEHICLE_BY_COMPANY_ID_OR_BRFR_ID_API}${convertJsonToQueryParams(params)}`);
};
export const deleteVehicleService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_VEHICLE_API}${params}`);
};
export const updateVehicleService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_VEHICLE_API}${id}`);
};
