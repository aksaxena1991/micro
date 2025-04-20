import ApiFunction from "../APIFunction";
import { ADD_TEMPLATE_API, DELETE_GET_UPDATE_TEMPLATE_API, GET_All_TEMPLATE_API } from "./constants";

export const createTemplateService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_TEMPLATE_API);
};
export const getAllTemplateService = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_TEMPLATE_API}`);
};
export const deleteTemplateService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_TEMPLATE_API}${params}`);
};
export const updateTemplateService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_TEMPLATE_API}${id}`);
};

