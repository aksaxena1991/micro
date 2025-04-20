import ApiFunction from "../APIFunction";
import {
  ADD_BRFR_API,
  DELETE_GET_UPDATE_BRFR_API,
  
  GET_All_BRFR_BY_COMPANY_ID_API,
} from "./constants";

export const createBrFrService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_BRFR_API);
};

export const getAllBrFrByCompanyIdService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_BRFR_BY_COMPANY_ID_API}${params}`);
};
export const deleteBrFrService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_GET_UPDATE_BRFR_API}${params}`);
};
export const updateBrFrService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(params, `${DELETE_GET_UPDATE_BRFR_API}${id}`);
};
