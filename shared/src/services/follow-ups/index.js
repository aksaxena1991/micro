import ApiFunction from "../APIFunction";
import {
  ADD_FOLLOW_UPS_API,
  GET_FOLLOW_UPS_BY_EOC_ID_API
} from "./constants";

export const createFollowUpService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_FOLLOW_UPS_API);
};

export const getAllFollowUpByEOCIDService = async (params) => {
  const apiFunction = new ApiFunction();

  return await apiFunction.get(`${GET_FOLLOW_UPS_BY_EOC_ID_API}/${params}`);
};
// export const deleteBankService = async (params) => {
//   const apiFunction = new ApiFunction();
//   return await apiFunction.delete(`${DELETE_GET_UPDATE_BANK_API}${params}`);
// };
// export const updateBankService = async (params) => {
//   const apiFunction = new ApiFunction();
//   const { id } = params;
//   return await apiFunction.update(params, `${DELETE_GET_UPDATE_BANK_API}${id}`);
// };
