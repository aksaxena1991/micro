import { put, takeLatest } from "redux-saga/effects";
import {
  createVehicleService,
  deleteVehicleService,
  getAllVehicleByCompanyIDOrBrFrIDService,
  updateVehicleService
} from "../../../services/vehicle";
import { failedAllVehicleByCompanyIdOrBrFrId, failedCreateVehicle, failedDeleteVehicle, failedUpdateVehicle, requestAllVehicleByCompanyIdOrBrFrId, requestCreateVehicle, requestDeleteVehicle, requestUpdateVehicle, responseAllVehicleByCompanyIdOrBrFrId, responseCreateVehicle, responseDeleteVehicle, responseUpdateVehicle } from "../../slices/VehicleSlice";


function* getAllVehicleByCompanyIdSaga(action) {
  try {
    const response = yield getAllVehicleByCompanyIDOrBrFrIDService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllVehicleByCompanyIdOrBrFrId(response?.data));
    } else {
      yield put(failedAllVehicleByCompanyIdOrBrFrId(response));
    }
  } catch (error) {
    yield put(failedAllVehicleByCompanyIdOrBrFrId(error));
  }
}

function* createVehicleSaga(action) {
  try {

    const response = yield createVehicleService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateVehicle(response?.data));
    } else {
      yield put(failedCreateVehicle(response));
    }
  } catch (error) {
    yield put(failedCreateVehicle(error));
  }
}

function* deleteVehicleSaga(action) {
  try {
    const response = yield deleteVehicleService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteVehicle(response?.data));
    } else {
      yield put(failedDeleteVehicle(response));
    }
  } catch (error) {
    yield put(failedDeleteVehicle(error));
  }
}
function* updateVehicleSaga(action) {
  try {
    console.log(action.payload)
    const response = yield updateVehicleService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateVehicle(response?.data));
    } else {
      yield put(failedUpdateVehicle(response));
    }
  } catch (error) {
    yield put(failedUpdateVehicle(error));
  }
}

export function* watcherCreateVehicleSaga() {
  yield takeLatest(requestCreateVehicle.type, createVehicleSaga);
}
export function* watcherAllVehicleByCompanyIdSaga() {
  yield takeLatest(requestAllVehicleByCompanyIdOrBrFrId.type, getAllVehicleByCompanyIdSaga);
}

export function* watcherDeleteVehicleSaga() {
  yield takeLatest(requestDeleteVehicle.type, deleteVehicleSaga);
}
export function* watcherUpdateVehicleSaga() {
  yield takeLatest(requestUpdateVehicle.type, updateVehicleSaga);
}
