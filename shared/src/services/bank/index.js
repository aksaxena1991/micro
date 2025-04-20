import ApiFunction from "../APIFunction";
import {
  ADD_BANK_API,DELETE_GET_UPDATE_BANK_API,GET_All_BANK_API
} from "./constants";

export const createBankService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_BANK_API);
};

export const getAllBankService = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_BANK_API}`);
};
export const deleteBankService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_BANK_API}${params}`);
};
export const updateBankService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_BANK_API}${id}`);
};
