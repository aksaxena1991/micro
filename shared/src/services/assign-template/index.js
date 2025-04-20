import { convertJsonToQueryParams } from "../../utils";
import ApiFunction from "../APIFunction";
import { ADD_ASSIGN_TEMPLATE_API, DELETE_GET_UPDATE_ASSIGN_TEMPLATE_API, GET_All_ASSIGN_TEMPLATE_BY_BRFR_ID_OR_COMPANY_ID_API } from "./constants";

export const createAssignTemplateService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_ASSIGN_TEMPLATE_API);
};
export const getAllAssignTemplateByBrFrIDOrCompanyIDService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_ASSIGN_TEMPLATE_BY_BRFR_ID_OR_COMPANY_ID_API}${convertJsonToQueryParams(params)}`);
};
export const deleteAssignTemplateService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_ASSIGN_TEMPLATE_API}${params}`);
};
export const updateAssignTemplateService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_ASSIGN_TEMPLATE_API}${id}`);
};

