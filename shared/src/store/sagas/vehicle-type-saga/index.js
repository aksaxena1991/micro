import { put, takeLatest } from "redux-saga/effects";
import {
  createVehicleTypeService,
  deleteVehicleTypeService, getAllVehicleTypeService, updateVehicleTypeService
} from "../../../services/vehicle-type";
import {
  failedAllVehicleType,
  failedCreateVehicleType,
  failedDeleteVehicleType,
  failedUpdateVehicleType,
  requestAllVehicleType,
  requestCreateVehicleType,
  requestDeleteVehicleType,
  requestUpdateVehicleType,
  responseAllVehicleType,
  responseCreateVehicleType,
  responseDeleteVehicleType,
  responseUpdateVehicleType
} from "../../slices/VehicleTypeSlice";

function* getAllVehicleTypesSaga(action) {
  try {
    const response = yield getAllVehicleTypeService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllVehicleType(response?.data));
    } else {
      yield put(failedAllVehicleType(response));
    }
  } catch (error) {
    yield put(failedAllVehicleType(error));
  }
}

function* createVehicleTypeSaga(action) {
  try {
    const response = yield createVehicleTypeService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateVehicleType());
    } else {
      yield put(failedCreateVehicleType(response));
    }
  } catch (error) {
    yield put(failedCreateVehicleType(error));
  }
}

function* deleteVehicleTypeSaga(action) {
  try {
    const response = yield deleteVehicleTypeService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteVehicleType(response?.data));
    } else {
      yield put(failedDeleteVehicleType(response));
    }
  } catch (error) {
    yield put(failedDeleteVehicleType(error));
  }
}
function* updateVehicleTypeSaga(action) {
  try {
    const response = yield updateVehicleTypeService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateVehicleType(response?.data));
    } else {
      yield put(failedUpdateVehicleType(response));
    }
  } catch (error) {
    yield put(failedUpdateVehicleType(error));
  }
}

export function* watcherCreateVehicleTypeSaga() {
  yield takeLatest(requestCreateVehicleType.type, createVehicleTypeSaga);
}
export function* watcherAllVehicleTypeSaga() {
  yield takeLatest(requestAllVehicleType.type, getAllVehicleTypesSaga);
}

export function* watcherDeleteVehicleTypeSaga() {
  yield takeLatest(requestDeleteVehicleType.type, deleteVehicleTypeSaga);
}
export function* watcherUpdateVehicleTypeSaga() {
  yield takeLatest(requestUpdateVehicleType.type, updateVehicleTypeSaga);
}
