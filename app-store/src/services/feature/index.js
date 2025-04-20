import ApiFunction from "../APIFunction";
import {
  ADD_FEATURE_API,
  DELETE_GET_UPDATE_FEATURE_API,
  GET_All_FEATURE_API,
} from "./constants";

export const createFeatureService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_FEATURE_API);
};

export const getAllFeatureService = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_FEATURE_API}`);
};
export const deleteFeatureService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_FEATURE_API}${params}`);
};
export const updateFeatureService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(
    params,
    `${DELETE_GET_UPDATE_FEATURE_API}${id}`,
  );
};
