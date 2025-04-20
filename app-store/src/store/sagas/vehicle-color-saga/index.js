import { put, takeLatest } from "redux-saga/effects";
import {
  createVehicleColorService,
  deleteVehicleColorService, getAllVehicleColorService, updateVehicleColorService
} from "../../../services/vehicle-color";
import {
  failedAllVehicleColor,
  failedCreateVehicleColor,
  failedDeleteVehicleColor,
  failedUpdateVehicleColor,
  requestAllVehicleColor,
  requestCreateVehicleColor,
  requestDeleteVehicleColor,
  requestUpdateVehicleColor,
  responseAllVehicleColor,
  responseCreateVehicleColor,
  responseDeleteVehicleColor,
  responseUpdateVehicleColor
} from "../../slices/VehicleColorSlice";

function* getAllVehicleColorsSaga(action) {
  try {
    const response = yield getAllVehicleColorService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllVehicleColor(response?.data));
    } else {
      yield put(failedAllVehicleColor(response));
    }
  } catch (error) {
    yield put(failedAllVehicleColor(error));
  }
}

function* createVehicleColorSaga(action) {
  try {
    const response = yield createVehicleColorService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateVehicleColor());
    } else {
      yield put(failedCreateVehicleColor(response));
    }
  } catch (error) {
    yield put(failedCreateVehicleColor(error));
  }
}

function* deleteVehicleColorSaga(action) {
  try {
    const response = yield deleteVehicleColorService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteVehicleColor(response?.data));
    } else {
      yield put(failedDeleteVehicleColor(response));
    }
  } catch (error) {
    yield put(failedDeleteVehicleColor(error));
  }
}
function* updateVehicleColorSaga(action) {
  try {
    const response = yield updateVehicleColorService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateVehicleColor(response?.data));
    } else {
      yield put(failedUpdateVehicleColor(response));
    }
  } catch (error) {
    yield put(failedUpdateVehicleColor(error));
  }
}

export function* watcherCreateVehicleColorSaga() {
  yield takeLatest(requestCreateVehicleColor.type, createVehicleColorSaga);
}
export function* watcherAllVehicleColorSaga() {
  yield takeLatest(requestAllVehicleColor.type, getAllVehicleColorsSaga);
}

export function* watcherDeleteVehicleColorSaga() {
  yield takeLatest(requestDeleteVehicleColor.type, deleteVehicleColorSaga);
}
export function* watcherUpdateVehicleColorSaga() {
  yield takeLatest(requestUpdateVehicleColor.type, updateVehicleColorSaga);
}
