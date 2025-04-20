import { put, takeLatest } from "redux-saga/effects";
import {
  createVehicleAccessoriesService,
  deleteVehicleAccessoriesService, getAllVehicleAccessoriesService, updateVehicleAccessoriesService
} from "../../../services/vehicle-accessories";
import {
  failedAllVehicleAccessories,
  failedCreateVehicleAccessories,
  failedDeleteVehicleAccessories,
  failedUpdateVehicleAccessories,
  requestAllVehicleAccessories,
  requestCreateVehicleAccessories,
  requestDeleteVehicleAccessories,
  requestUpdateVehicleAccessories,
  responseAllVehicleAccessories,
  responseCreateVehicleAccessories,
  responseDeleteVehicleAccessories,
  responseUpdateVehicleAccessories
} from "../../slices/VehicleAccessoriesSlice";

function* getAllVehicleAccessoriesSaga(action) {
  try {
    const response = yield getAllVehicleAccessoriesService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllVehicleAccessories(response?.data));
    } else {
      yield put(failedAllVehicleAccessories(response));
    }
  } catch (error) {
    yield put(failedAllVehicleAccessories(error));
  }
}

function* createVehicleAccessoriesSaga(action) {
  try {
    const response = yield createVehicleAccessoriesService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateVehicleAccessories());
    } else {
      yield put(failedCreateVehicleAccessories(response));
    }
  } catch (error) {
    yield put(failedCreateVehicleAccessories(error));
  }
}

function* deleteVehicleAccessoriesSaga(action) {
  try {
    const response = yield deleteVehicleAccessoriesService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteVehicleAccessories(response?.data));
    } else {
      yield put(failedDeleteVehicleAccessories(response));
    }
  } catch (error) {
    yield put(failedDeleteVehicleAccessories(error));
  }
}
function* updateVehicleAccessoriesSaga(action) {
  try {
    const response = yield updateVehicleAccessoriesService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateVehicleAccessories(response?.data));
    } else {
      yield put(failedUpdateVehicleAccessories(response));
    }
  } catch (error) {
    yield put(failedUpdateVehicleAccessories(error));
  }
}

export function* watcherCreateVehicleAccessoriesSaga() {
  yield takeLatest(requestCreateVehicleAccessories.type, createVehicleAccessoriesSaga);
}
export function* watcherAllVehicleAccessoriesSaga() {
  yield takeLatest(requestAllVehicleAccessories.type, getAllVehicleAccessoriesSaga);
}

export function* watcherDeleteVehicleAccessoriesSaga() {
  yield takeLatest(requestDeleteVehicleAccessories.type, deleteVehicleAccessoriesSaga);
}
export function* watcherUpdateVehicleAccessoriesSaga() {
  yield takeLatest(requestUpdateVehicleAccessories.type, updateVehicleAccessoriesSaga);
}
