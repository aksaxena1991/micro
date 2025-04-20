import { convertJsonToQueryParams } from "../../utils";
import ApiFunction from "../APIFunction";
import {
  ADD_DOCUMENT_FOOTER_CONTENT_API,
  DELETE_GET_UPDATE_DOCUMENT_FOOTER_CONTENT_API,
  GET_All_DOCUMENT_FOOTER_CONTENT_BY_COMPANY_ID_OR_BRFR_ID_API,
} from "./constants";

export const createDocumentFooterContentService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_DOCUMENT_FOOTER_CONTENT_API);
};

export const getAllDocumentFooterContentByCompanyIdService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_DOCUMENT_FOOTER_CONTENT_BY_COMPANY_ID_OR_BRFR_ID_API}${convertJsonToQueryParams(params)}`);
};
export const deleteDocumentFooterContentService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_DOCUMENT_FOOTER_CONTENT_API}${params}`);
};
export const updateDocumentFooterContentService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_DOCUMENT_FOOTER_CONTENT_API}${id}`);
};
