import ApiFunction from "../APIFunction";
import { ADD_SIGNATURE_API, DELETE_GET_UPDATE_SIGNATURE_API, GET_ALL_SIGNATURE_API } from "./constants";

export const createSignatureService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_SIGNATURE_API);
};

export const getAllSignatureService = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_ALL_SIGNATURE_API}`);
};

export const deleteSignatureService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_SIGNATURE_API}${params}`);
}

export const updateSignatureService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_SIGNATURE_API}${id}`);
}
