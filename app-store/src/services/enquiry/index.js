import { convertJsonToQueryParams } from "../../utils";
import ApiFunction from "../APIFunction";
import {
  ADD_ENQUIRY_API, DELETE_GET_UPDATE_ENQUIRY_API,
  GET_All_ENQUIRY_BY_BRFR_ID_OR_COMPANY_ID_API,
} from "./constants";

export const createEnquiryService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_ENQUIRY_API);
};
export const deleteEnquiryService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_ENQUIRY_API}${params}`);
};
export const getEnquiryByBrFrIDOrCompanyIDService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_ENQUIRY_BY_BRFR_ID_OR_COMPANY_ID_API}${convertJsonToQueryParams(params)}`);
};
export const updateEnquiryService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_ENQUIRY_API}${id}`);
};
export const getEnquiryByIDService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(params, `${DELETE_GET_UPDATE_ENQUIRY_API}${params}`);
};
