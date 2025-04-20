import { convertJsonToQueryParams } from "../../utils";
import ApiFunction from "../APIFunction";
import {
  ADD_SERIAL_SETTING_API,
  DELETE_GET_UPDATE_SERIAL_SETTING_API,
  GET_All_SERIAL_SETTING_API,
  GET_All_SERIAL_SETTING_BY_COMPANY_ID_OR_BRFR_ID_API,
  GET_SERIAL_SETTING_BY_COMPANYID_BRFRID_MODULENAME
} from "./constants";

export const createSerialSettingService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_SERIAL_SETTING_API);
};

export const getAllSerialSettingByCompanyIdOrBrFrIDService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_SERIAL_SETTING_BY_COMPANY_ID_OR_BRFR_ID_API}${convertJsonToQueryParams(params)}`);
};
export const getAllSerialSettingService = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_SERIAL_SETTING_API}`);
};
export const deleteSerialSettingService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_SERIAL_SETTING_API}${params}`);
};
export const updateSerialSettingService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_SERIAL_SETTING_API}${id}`);
};
export const getSerialSettingByCompanyIdBrFrIdModuleName = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_SERIAL_SETTING_BY_COMPANYID_BRFRID_MODULENAME}${convertJsonToQueryParams(params)}`);
};
