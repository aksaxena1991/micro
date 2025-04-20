import { put, takeLatest } from "redux-saga/effects";
import {
  createVehicleLoadSizeService,
  deleteVehicleLoadSizeService, getAllVehicleLoadSizeService, updateVehicleLoadSizeService
} from "../../../services/vehicle-load-size";
import {
  failedAllVehicleLoadSize,
  failedCreateVehicleLoadSize,
  failedDeleteVehicleLoadSize,
  failedUpdateVehicleLoadSize,
  requestAllVehicleLoadSize,
  requestCreateVehicleLoadSize,
  requestDeleteVehicleLoadSize,
  requestUpdateVehicleLoadSize,
  responseAllVehicleLoadSize,
  responseCreateVehicleLoadSize,
  responseDeleteVehicleLoadSize,
  responseUpdateVehicleLoadSize
} from "../../slices/VehicleLoadSizeSlice";

function* getAllVehicleLoadSizesSaga(action) {
  try {
    const response = yield getAllVehicleLoadSizeService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllVehicleLoadSize(response?.data));
    } else {
      yield put(failedAllVehicleLoadSize(response));
    }
  } catch (error) {
    yield put(failedAllVehicleLoadSize(error));
  }
}

function* createVehicleLoadSizeSaga(action) {
  try {
    const response = yield createVehicleLoadSizeService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateVehicleLoadSize());
    } else {
      yield put(failedCreateVehicleLoadSize(response));
    }
  } catch (error) {
    yield put(failedCreateVehicleLoadSize(error));
  }
}

function* deleteVehicleLoadSizeSaga(action) {
  try {
    const response = yield deleteVehicleLoadSizeService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteVehicleLoadSize(response?.data));
    } else {
      yield put(failedDeleteVehicleLoadSize(response));
    }
  } catch (error) {
    yield put(failedDeleteVehicleLoadSize(error));
  }
}
function* updateVehicleLoadSizeSaga(action) {
  try {
    const response = yield updateVehicleLoadSizeService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateVehicleLoadSize(response?.data));
    } else {
      yield put(failedUpdateVehicleLoadSize(response));
    }
  } catch (error) {
    yield put(failedUpdateVehicleLoadSize(error));
  }
}

export function* watcherCreateVehicleLoadSizeSaga() {
  yield takeLatest(requestCreateVehicleLoadSize.type, createVehicleLoadSizeSaga);
}
export function* watcherAllVehicleLoadSizeSaga() {
  yield takeLatest(requestAllVehicleLoadSize.type, getAllVehicleLoadSizesSaga);
}

export function* watcherDeleteVehicleLoadSizeSaga() {
  yield takeLatest(requestDeleteVehicleLoadSize.type, deleteVehicleLoadSizeSaga);
}
export function* watcherUpdateVehicleLoadSizeSaga() {
  yield takeLatest(requestUpdateVehicleLoadSize.type, updateVehicleLoadSizeSaga);
}
