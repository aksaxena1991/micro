import ApiFunction from "../APIFunction";
import {
  ADD_PAYMENT_MODE_API,
  DELETE_GET_UPDATE_PAYMENT_MODE_API,
  GET_All_PAYMENT_MODE_API
} from "./constants";

export const createPaymentModeService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_PAYMENT_MODE_API);
};

export const getAllPaymentModeService = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_PAYMENT_MODE_API}`);
};
export const deletePaymentModeService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_PAYMENT_MODE_API}${params}`);
};
export const updatePaymentModeService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_PAYMENT_MODE_API}${id}`);
};
