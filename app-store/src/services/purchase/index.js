import ApiFunction from "../APIFunction";
import {
  ADD_PURCHASE_API,
  DELETE_GET_UPDATE_PURCHASE_API,
  GET_All_PURCHASE_API
} from "./constants";

export const createPurchaseService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_PURCHASE_API);
};

export const getAllPurchaseService = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_PURCHASE_API}`);
};
export const deletePurchaseService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(
    `${DELETE_GET_UPDATE_PURCHASE_API}${params}`,
  );
};
export const getPurchaseByIdService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(
    `${DELETE_GET_UPDATE_PURCHASE_API}${params}`,
  );
};
export const updatePurchaseService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(
    params,
    `${DELETE_GET_UPDATE_PURCHASE_API}${id}`,
  );
};
