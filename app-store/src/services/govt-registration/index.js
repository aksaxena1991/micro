import { convertJsonToQueryParams } from "../../utils";
import ApiFunction from "../APIFunction";
import {
  ADD_GOVT_REGISTRATION_API,
  DELETE_GET_UPDATE_GOVT_REGISTRATION_API,
  GET_All_GOVT_REGISTRATION_BY_COMPANY_ID_OR_BRFR_ID_API,
} from "./constants";

export const createGovtRegistrationService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_GOVT_REGISTRATION_API);
};

export const getAllGovtRegistrationByCompanyIdOrBrFrIdService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_GOVT_REGISTRATION_BY_COMPANY_ID_OR_BRFR_ID_API}${convertJsonToQueryParams(params)}`);
};
export const deleteGovtRegistrationService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_GOVT_REGISTRATION_API}${params}`);
};
export const updateGovtRegistrationService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_GOVT_REGISTRATION_API}${id}`);
};
