import { convertJsonToQueryParams } from "../../utils";
import ApiFunction from "../APIFunction";
import {
  ADD_COMPANY_DOCUMENTS_API,
  DELETE_GET_UPDATE_COMPANY_DOCUMENTS_API,
  GET_All_COMPANY_DOCUMENTS_BY_BRFR_ID_OR_COMPANY_ID_API,
} from "./constants";

export const createCompanyDocumentService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_COMPANY_DOCUMENTS_API);
};

export const getAllCompanyDocumentByCompanyIdService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_COMPANY_DOCUMENTS_BY_BRFR_ID_OR_COMPANY_ID_API}${convertJsonToQueryParams(params)}`);
};
export const deleteCompanyDocumentService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_COMPANY_DOCUMENTS_API}${params}`);
};
export const updateCompanyDocumentService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_COMPANY_DOCUMENTS_API}${id}`);
};
