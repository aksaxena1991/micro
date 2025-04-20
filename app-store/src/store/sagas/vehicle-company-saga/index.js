import { put, takeLatest } from "redux-saga/effects";
import {
  createVehicleCompanyService,
  deleteVehicleCompanyService, getAllVehicleCompanyService, updateVehicleCompanyService
} from "../../../services/vehicle-company";
import {
  failedAllVehicleCompany,
  failedCreateVehicleCompany,
  failedDeleteVehicleCompany,
  failedUpdateVehicleCompany,
  requestAllVehicleCompany,
  requestCreateVehicleCompany,
  requestDeleteVehicleCompany,
  requestUpdateVehicleCompany,
  responseAllVehicleCompany,
  responseCreateVehicleCompany,
  responseDeleteVehicleCompany,
  responseUpdateVehicleCompany
} from "../../slices/VehicleCompanySlice";

function* getAllVehicleCompanySaga(action) {
  try {
    const response = yield getAllVehicleCompanyService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllVehicleCompany(response?.data));
    } else {
      yield put(failedAllVehicleCompany(response));
    }
  } catch (error) {
    yield put(failedAllVehicleCompany(error));
  }
}

function* createVehicleCompanySaga(action) {
  try {
    const response = yield createVehicleCompanyService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateVehicleCompany());
    } else {
      yield put(failedCreateVehicleCompany(response));
    }
  } catch (error) {
    yield put(failedCreateVehicleCompany(error));
  }
}

function* deleteVehicleCompanySaga(action) {
  try {
    const response = yield deleteVehicleCompanyService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteVehicleCompany(response?.data));
    } else {
      yield put(failedDeleteVehicleCompany(response));
    }
  } catch (error) {
    yield put(failedDeleteVehicleCompany(error));
  }
}
function* updateVehicleCompanySaga(action) {
  try {
    const response = yield updateVehicleCompanyService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateVehicleCompany(response?.data));
    } else {
      yield put(failedUpdateVehicleCompany(response));
    }
  } catch (error) {
    yield put(failedUpdateVehicleCompany(error));
  }
}

export function* watcherCreateVehicleCompanySaga() {
  yield takeLatest(requestCreateVehicleCompany.type, createVehicleCompanySaga);
}
export function* watcherAllVehicleCompanySaga() {
  yield takeLatest(requestAllVehicleCompany.type, getAllVehicleCompanySaga);
}

export function* watcherDeleteVehicleCompanySaga() {
  yield takeLatest(requestDeleteVehicleCompany.type, deleteVehicleCompanySaga);
}
export function* watcherUpdateVehicleCompanySaga() {
  yield takeLatest(requestUpdateVehicleCompany.type, updateVehicleCompanySaga);
}
