import ApiFunction from "../APIFunction";
import { DELETE_GET_UPDATE_COMPANY_API, GET_COMPANY_BY_AUTH_ID_API, REGISTRATION_API } from "./constants";
export const registrationService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, REGISTRATION_API);
};
export const getCompanyByAuthIDService = async (param) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_COMPANY_BY_AUTH_ID_API}/${param}`);
}
export const getCompanyByIDService = async (param) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${DELETE_GET_UPDATE_COMPANY_API}/${param}`);
}
export const updateCompanyByIDService = async (params, id) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.update(params,`${DELETE_GET_UPDATE_COMPANY_API}${id}`);
}

