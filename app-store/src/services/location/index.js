import { convertJsonToQueryParams } from "../../utils";
import ApiFunction from "../APIFunction";
import {
  GET_LOCATIONS_VIA_PINCODE_API,
} from "./constants";
export const getAllLocationViaPincodeService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_LOCATIONS_VIA_PINCODE_API}${convertJsonToQueryParams(params)}`);
};