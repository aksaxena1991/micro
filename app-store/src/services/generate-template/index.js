import { convertJsonToQueryParams } from "../../utils";
import ApiFunction from "../APIFunction";
import { GENERATE_TEMPLATE_API } from "./constants";

export const generateTemplateService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, GENERATE_TEMPLATE_API);
};