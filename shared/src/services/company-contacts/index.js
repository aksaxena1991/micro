import { convertJsonToQueryParams } from "../../utils";
import ApiFunction from "../APIFunction";
import {
  ADD_COMPANY_CONTACTS_API,
  DELETE_GET_UPDATE_COMPANY_CONTACTS_API,
  GET_All_COMPANY_CONTACTS_BY_BRFR_ID_OR_COMPANY_ID_API,
} from "./constants";

export const createCompanyContactService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_COMPANY_CONTACTS_API);
};

export const getAllCompanyContactByCompanyIdService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_COMPANY_CONTACTS_BY_BRFR_ID_OR_COMPANY_ID_API}${convertJsonToQueryParams(params)}`);
};
export const deleteCompanyContactService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_COMPANY_CONTACTS_API}${params}`);
};
export const updateCompanyContactService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_COMPANY_CONTACTS_API}${id}`);
};
