import { put, takeLatest } from "redux-saga/effects";

import { getCompanyByIDService, registrationService, updateCompanyByIDService } from "../../../services/company";
import {
  failedCurrentCompany,
  failedGetCompanyByID,
  failedRegisterCompany,
  failedUpdateCompany,
  requestCurrentCompany,
  requestGetCompanyByID,
  requestRegisterCompany,
  requestUpdateCompany,
  responseCurrentCompany,
  responseGetCompanyByID,
  responseRegisterCompany,
  responseUpdateCompany,
} from "../../slices/CompanySlice";

function* registrationSaga(action) {
  try {
    const response = yield registrationService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseRegisterCompany(response?.data));
    } else {
      yield put(failedRegisterCompany(response?.data));
    }
  } catch (error) {
    yield put(failedRegisterCompany(error));
  }
}
function* updateCompanySaga(action) {
  try {
    const response = yield updateCompanyByIDService(action.payload, action?.payload?.id);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateCompany());
    } else {
      yield put(failedUpdateCompany(response?.data));
    }
  } catch (error) {
    yield put(failedUpdateCompany(error));
  }
}
function* getCompanyByIDSaga(action) {
  try {
    const response = yield getCompanyByIDService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseGetCompanyByID(response?.data));
    } else {
      yield put(failedGetCompanyByID(response?.data));
    }
  } catch (error) {
    yield put(failedGetCompanyByID(error));
  }
}

function* currentCompanySaga(action) {
  try {
    
    yield put(responseCurrentCompany(action.payload));
  } catch (error) {
    yield put(failedCurrentCompany(error));
  }
}


export function* watcherRegistrationSaga() {
  yield takeLatest(requestRegisterCompany.type, registrationSaga);
}
export function* watcherUpdateCompanySaga() {
  yield takeLatest(requestUpdateCompany.type, updateCompanySaga);
}
export function* watcherGetCompanyByIDSaga() {
  yield takeLatest(requestGetCompanyByID.type, getCompanyByIDSaga);
}
export function* watcherCurrentCompanySaga() {
  yield takeLatest(requestCurrentCompany.type, currentCompanySaga);
}
