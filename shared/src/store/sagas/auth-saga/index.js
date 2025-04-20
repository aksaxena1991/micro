import { put, takeLatest } from "redux-saga/effects";
import {
  authDetailsByIDService,
  loginService,
  registerEmployeeService,
  verifyOTPService,
} from "../../../services/auth";
import {
  failedAuthDetails,
  failedLogin,
  failedRegisterEmployee,
  failedVerifyOTP,
  requestAuthDetails,
  requestLogin,
  requestRegisterEmployee,
  requestVerifyOTP,
  responseAuthDetails,
  responseLogin,
  responseRegisterEmployee,
  responseVerifyOTP
} from "../../slices/AuthSlice";

function* loginSaga(action) {
  try {
    const response = yield loginService(action.payload);
    const { code } = response;

    if (code === 200) {
      yield put(responseLogin(response?.data));
    } else {
      yield put(failedLogin(response));
    }
  } catch (error) {
    yield put(failedLogin(error));
  }
}
function* verifyOTPSaga(action) {
  try {
    const response = yield verifyOTPService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseVerifyOTP(response?.data));
    } else {
      yield put(failedVerifyOTP(response));
    }
  } catch (error) {
    yield put(failedVerifyOTP(error));
  }
}
function* registerEmployeeSaga(action) {
  try {
    const response = yield registerEmployeeService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseRegisterEmployee(response?.data));
    } else {
      yield put(failedRegisterEmployee(response));
    }
  } catch (error) {
    yield put(failedRegisterEmployee(error));
  }
}
function* getAuthDetailsSaga(action) {
  try {
    const response = yield authDetailsByIDService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAuthDetails(response?.data));
    } else {
      yield put(failedAuthDetails(response));
    }
  } catch (error) {
    yield put(failedAuthDetails(error));
  }
}

export function* watcherGetAuthDetailsSaga() {
  yield takeLatest(requestAuthDetails.type, getAuthDetailsSaga);
}
export function* watcherLoginSaga() {
  yield takeLatest(requestLogin.type, loginSaga);
}
export function* watcherVerifyOTPSaga() {
  yield takeLatest(requestVerifyOTP.type, verifyOTPSaga);
}
export function* watcherRegisterEmployeeSaga() {
  yield takeLatest(requestRegisterEmployee.type, registerEmployeeSaga);
}
