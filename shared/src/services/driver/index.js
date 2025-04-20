import { convertJsonToQueryParams } from "../../utils";
import ApiFunction from "../APIFunction";
import { ADD_DRIVER_API, DELETE_GET_UPDATE_DRIVER_API, GET_All_DRIVER_BY_COMPANY_ID_OR_BRFR_ID_API } from "./constants";

export const createDriverService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_DRIVER_API);
};

export const getAllDriverByCompanyIDOrBrFrIDService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_DRIVER_BY_COMPANY_ID_OR_BRFR_ID_API}${convertJsonToQueryParams(params)}`);
};
export const deleteDriverService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_DRIVER_API}${params}`);
};
export const updateDriverService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_DRIVER_API}${id}`);
};
