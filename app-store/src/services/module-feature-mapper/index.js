import ApiFunction from "../APIFunction";
import {
  ADD_MODULE_FEATURE_MAPPER_API,
  DELETE_GET_UPDATE_MODULE_FEATURE_MAPPER_API,
  GET_All_MODULE_FEATURE_MAPPER_API,
} from "./constants";

export const createModuleFeatureMapperService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_MODULE_FEATURE_MAPPER_API);
};

export const getAllModuleFeatureMapperService = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_MODULE_FEATURE_MAPPER_API}`);
};
export const deleteModuleFeatureMapperService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(
    `${DELETE_GET_UPDATE_MODULE_FEATURE_MAPPER_API}${params}`,
  );
};
export const updateModuleFeatureMapperService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(
    params,
    `${DELETE_GET_UPDATE_MODULE_FEATURE_MAPPER_API}${id}`,
  );
};
