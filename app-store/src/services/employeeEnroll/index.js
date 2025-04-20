import ApiFunction from "../APIFunction";
import {
  ADD_EMPLOYEE_ENROLL_API,
  DELETE_GET_UPDATE_EMPLOYEE_ENROLL_API,
  GET_All_EMPLOYEE_ENROLL_API,
} from "./constants";

export const createEmployeeEnrollService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_EMPLOYEE_ENROLL_API);
};

export const getAllEmployeeEnrollService = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_All_EMPLOYEE_ENROLL_API}`);
};
export const deleteEmployeeEnrollService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(
    `${DELETE_GET_UPDATE_EMPLOYEE_ENROLL_API}${params}`,
  );
};
export const updateEmployeeEnrollService = async (params) => {
  const apiFunction = new ApiFunction();
  const { id } = params;
  return await apiFunction.update(
    params,
    `${DELETE_GET_UPDATE_EMPLOYEE_ENROLL_API}${id}`,
  );
};
