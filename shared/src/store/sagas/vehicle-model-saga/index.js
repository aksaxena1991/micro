import { put, takeLatest } from "redux-saga/effects";
import {
  createVehicleModelService,
  deleteVehicleModelService, getAllVehicleModelService, updateVehicleModelService
} from "../../../services/vehicle-model";
import {
  failedAllVehicleModel,
  failedCreateVehicleModel,
  failedDeleteVehicleModel,
  failedUpdateVehicleModel,
  requestAllVehicleModel,
  requestCreateVehicleModel,
  requestDeleteVehicleModel,
  requestUpdateVehicleModel,
  responseAllVehicleModel,
  responseCreateVehicleModel,
  responseDeleteVehicleModel,
  responseUpdateVehicleModel
} from "../../slices/VehicleModelSlice";

function* getAllVehicleModelsSaga() {
  try {
    const response = yield getAllVehicleModelService();
    const { code } = response;
    if (code === 200) {
      yield put(responseAllVehicleModel(response?.data));
    } else {
      yield put(failedAllVehicleModel(response));
    }
  } catch (error) {
    yield put(failedAllVehicleModel(error));
  }
}

function* createVehicleModelSaga(action) {
  try {
    const response = yield createVehicleModelService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateVehicleModel());
    } else {
      yield put(failedCreateVehicleModel(response));
    }
  } catch (error) {
    yield put(failedCreateVehicleModel(error));
  }
}

function* deleteVehicleModelSaga(action) {
  try {
    const response = yield deleteVehicleModelService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteVehicleModel(response?.data));
    } else {
      yield put(failedDeleteVehicleModel(response));
    }
  } catch (error) {
    yield put(failedDeleteVehicleModel(error));
  }
}
function* updateVehicleModelSaga(action) {
  try {
    const response = yield updateVehicleModelService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateVehicleModel(response?.data));
    } else {
      yield put(failedUpdateVehicleModel(response));
    }
  } catch (error) {
    yield put(failedUpdateVehicleModel(error));
  }
}

export function* watcherCreateVehicleModelSaga() {
  yield takeLatest(requestCreateVehicleModel.type, createVehicleModelSaga);
}
export function* watcherAllVehicleModelSaga() {
  yield takeLatest(requestAllVehicleModel.type, getAllVehicleModelsSaga);
}

export function* watcherDeleteVehicleModelSaga() {
  yield takeLatest(requestDeleteVehicleModel.type, deleteVehicleModelSaga);
}
export function* watcherUpdateVehicleModelSaga() {
  yield takeLatest(requestUpdateVehicleModel.type, updateVehicleModelSaga);
}
