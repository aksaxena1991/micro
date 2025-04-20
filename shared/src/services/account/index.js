import ApiFunction from "../APIFunction";
import {
  ADD_ACCOUNT_API,
  DELETE_GET_UPDATE_ACCOUNTS_API,
  GET_ALL_ACCOUNTS_BY_COMPANY_ID_API
} from "./constants";
export const createAccountService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_ACCOUNT_API);
};
export const getAllAccountsByCompanyIDService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_ALL_ACCOUNTS_BY_COMPANY_ID_API}/${params}`);
}
export const updateAccountService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_ACCOUNTS_API}/${id}`);
}
export const deleteAccountService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_ACCOUNTS_API}/${params}`);
};