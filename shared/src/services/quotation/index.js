import { convertJsonToQueryParams } from "../../utils";
import ApiFunction from "../APIFunction";
import { ADD_QUOTATION_API, ALL_QUOTATIONS_BY_EOCID_API, GET_SERIAL_NUMBER_BY_COMPANYID_OR_BRFRID } from "./constant";

export const createQuotationService = async (params) => {
    const apiFunction = new ApiFunction();
    return await apiFunction.post(params, ADD_QUOTATION_API);
  };
  export const getAllQuotationByEOCIDService = async (params) => {
    const apiFunction = new ApiFunction();
    return await apiFunction.get(`${ALL_QUOTATIONS_BY_EOCID_API}/${params}`);
  };
  export const getSerialNumberByCompanyIDOrBrFrIDService = async(params) =>{
    
    const apiFunction = new ApiFunction();
    return await apiFunction.get(`${GET_SERIAL_NUMBER_BY_COMPANYID_OR_BRFRID}${convertJsonToQueryParams(params)}`);
  }