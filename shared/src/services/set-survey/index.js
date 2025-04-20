import ApiFunction from "../APIFunction";
import {
  ADD_SET_SURVEY_API,
  GET_SET_SURVEY_BY_EOC_ID_API
} from "./constants";

export const createSetSurveyService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_SET_SURVEY_API);
};

export const getAllSetSurveyByEOCIDService = async (params) => {
  const apiFunction = new ApiFunction();

  return await apiFunction.get(`${GET_SET_SURVEY_BY_EOC_ID_API}/${params}`);
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
