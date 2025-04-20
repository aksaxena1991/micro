import { convertJsonToQueryParams } from "../../utils";
import ApiFunction from "../APIFunction";
import {
  ALL_CITY_STATE_PINCODE_COUNTRY_API
} from "./constants";



export const allCityStatePincodeCountryService = async () => {
  const url = process.env.REACT_APP_ALL_CITY_STATE_PINCODE_COUNTRY
  const apiFunction = new ApiFunction(url);
  return await apiFunction.get(`${ALL_CITY_STATE_PINCODE_COUNTRY_API}${convertJsonToQueryParams({
    rows: 10000, start: 0, dataset: "geonames-postal-code@public"
  })}`);
};

