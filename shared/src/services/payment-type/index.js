import ApiFunction from "../APIFunction";
import {
  ADD_PAYMENT_TYPE_API,
  DELETE_GET_UPDATE_PAYMENT_TYPE_API,GET_All_PAYMENT_TYPE_API
} from "./constants";

export const createPaymentTypeService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_PAYMENT_TYPE_API);
};

export const getAllPaymentTypeService = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_PAYMENT_TYPE_API}`);
};
export const deletePaymentTypeService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_PAYMENT_TYPE_API}${params}`);
};
export const updatePaymentTypeService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_PAYMENT_TYPE_API}${id}`);
};
