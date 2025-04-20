import ApiFunction from "../APIFunction";
import {
  ADD_PLAN_API,
  DELETE_GET_UPDATE_PLAN_API,
  GET_All_PLAN_API
} from "./constants";

export const createPlanService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_PLAN_API);
};

export const getAllPlanService = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_PLAN_API}`);
};
export const deletePlanService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(
    `${DELETE_GET_UPDATE_PLAN_API}${params}`,
  );
};
export const getPlanByIdService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(
    `${DELETE_GET_UPDATE_PLAN_API}${params}`,
  );
};
export const updatePlanService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(
    params,
    `${DELETE_GET_UPDATE_PLAN_API}${id}`,
  );
};
