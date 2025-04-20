import { put, takeLatest } from "redux-saga/effects";
import {
  createVehicleInsuranceCompanyService,
  deleteVehicleInsuranceCompanyService, getAllVehicleInsuranceCompanyService, updateVehicleInsuranceCompanyService
} from "../../../services/vehicle-insurance-company";
import {
  failedAllVehicleInsuranceCompany,
  failedCreateVehicleInsuranceCompany,
  failedDeleteVehicleInsuranceCompany,
  failedUpdateVehicleInsuranceCompany,
  requestAllVehicleInsuranceCompany,
  requestCreateVehicleInsuranceCompany,
  requestDeleteVehicleInsuranceCompany,
  requestUpdateVehicleInsuranceCompany,
  responseAllVehicleInsuranceCompany,
  responseCreateVehicleInsuranceCompany,
  responseDeleteVehicleInsuranceCompany,
  responseUpdateVehicleInsuranceCompany
} from "../../slices/VehicleInsuranceCompanySlice";

function* getAllVehicleInsuranceCompanySaga(action) {
  try {
    const response = yield getAllVehicleInsuranceCompanyService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllVehicleInsuranceCompany(response?.data));
    } else {
      yield put(failedAllVehicleInsuranceCompany(response));
    }
  } catch (error) {
    yield put(failedAllVehicleInsuranceCompany(error));
  }
}

function* createVehicleInsuranceCompanySaga(action) {
  try {
    const response = yield createVehicleInsuranceCompanyService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateVehicleInsuranceCompany());
    } else {
      yield put(failedCreateVehicleInsuranceCompany(response));
    }
  } catch (error) {
    yield put(failedCreateVehicleInsuranceCompany(error));
  }
}

function* deleteVehicleInsuranceCompanySaga(action) {
  try {
    const response = yield deleteVehicleInsuranceCompanyService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteVehicleInsuranceCompany(response?.data));
    } else {
      yield put(failedDeleteVehicleInsuranceCompany(response));
    }
  } catch (error) {
    yield put(failedDeleteVehicleInsuranceCompany(error));
  }
}
function* updateVehicleInsuranceCompanySaga(action) {
  try {
    const response = yield updateVehicleInsuranceCompanyService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateVehicleInsuranceCompany(response?.data));
    } else {
      yield put(failedUpdateVehicleInsuranceCompany(response));
    }
  } catch (error) {
    yield put(failedUpdateVehicleInsuranceCompany(error));
  }
}

export function* watcherCreateVehicleInsuranceCompanySaga() {
  yield takeLatest(requestCreateVehicleInsuranceCompany.type, createVehicleInsuranceCompanySaga);
}
export function* watcherAllVehicleInsuranceCompanySaga() {
  yield takeLatest(requestAllVehicleInsuranceCompany.type, getAllVehicleInsuranceCompanySaga);
}

export function* watcherDeleteVehicleInsuranceCompanySaga() {
  yield takeLatest(requestDeleteVehicleInsuranceCompany.type, deleteVehicleInsuranceCompanySaga);
}
export function* watcherUpdateVehicleInsuranceCompanySaga() {
  yield takeLatest(requestUpdateVehicleInsuranceCompany.type, updateVehicleInsuranceCompanySaga);
}
