import { put, takeLatest } from "redux-saga/effects";
import {
  createDriverService,
  deleteDriverService,
  getAllDriverByCompanyIDOrBrFrIDService,
  updateDriverService
} from "../../../services/driver";
import { failedAllDriverByCompanyIdOrBrFrId, failedCreateDriver, failedDeleteDriver, failedUpdateDriver, requestAllDriverByCompanyIdOrBrFrId, requestCreateDriver, requestDeleteDriver, requestUpdateDriver, responseAllDriverByCompanyIdOrBrFrId, responseCreateDriver, responseDeleteDriver, responseUpdateDriver } from "../../slices/DriverSlice";


function* getAllDriverByCompanyIdSaga(action) {
  try {
    const response = yield getAllDriverByCompanyIDOrBrFrIDService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllDriverByCompanyIdOrBrFrId(response?.data));
    } else {
      yield put(failedAllDriverByCompanyIdOrBrFrId(response));
    }
  } catch (error) {
    yield put(failedAllDriverByCompanyIdOrBrFrId(error));
  }
}

function* createDriverSaga(action) {
  try {

    const response = yield createDriverService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateDriver(response?.data));
    } else {
      yield put(failedCreateDriver(response));
    }
  } catch (error) {
    yield put(failedCreateDriver(error));
  }
}

function* deleteDriverSaga(action) {
  try {
    const response = yield deleteDriverService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteDriver(response?.data));
    } else {
      yield put(failedDeleteDriver(response));
    }
  } catch (error) {
    yield put(failedDeleteDriver(error));
  }
}
function* updateDriverSaga(action) {
  try {
    console.log(action.payload)
    const response = yield updateDriverService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateDriver(response?.data));
    } else {
      yield put(failedUpdateDriver(response));
    }
  } catch (error) {
    yield put(failedUpdateDriver(error));
  }
}

export function* watcherCreateDriverSaga() {
  yield takeLatest(requestCreateDriver.type, createDriverSaga);
}
export function* watcherAllDriverByCompanyIdSaga() {
  yield takeLatest(requestAllDriverByCompanyIdOrBrFrId.type, getAllDriverByCompanyIdSaga);
}

export function* watcherDeleteDriverSaga() {
  yield takeLatest(requestDeleteDriver.type, deleteDriverSaga);
}
export function* watcherUpdateDriverSaga() {
  yield takeLatest(requestUpdateDriver.type, updateDriverSaga);
}
