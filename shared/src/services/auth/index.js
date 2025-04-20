import ApiFunction from "../APIFunction";
import {
  GET_AUTH_DETAILS_API,
  LOGIN_TO_APP_API,
  REGISTER_EMPLOYEE_API,
  VERIFY_OTP_API,
} from "./constants";
export const loginService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, LOGIN_TO_APP_API);
};
export const verifyOTPService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, VERIFY_OTP_API);
};
export const registerEmployeeService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, REGISTER_EMPLOYEE_API);
};
export const authDetailsByIDService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_AUTH_DETAILS_API}${params}`);
}
