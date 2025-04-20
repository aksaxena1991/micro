import { put, takeLatest } from "redux-saga/effects";
import {
  createFloorService, deleteFloorService, getAllFloorService, updateFloorService
} from "../../../services/floor";
import {
  failedAllFloor,
  failedCreateFloor,
  failedDeleteFloor,
  failedUpdateFloor,
  requestAllFloor,
  requestCreateFloor,
  requestDeleteFloor,
  requestUpdateFloor,
  responseAllFloor,
  responseCreateFloor,
  responseDeleteFloor,
  responseUpdateFloor
} from "../../slices/FloorSlice";

function* getAllFloorsSaga(action) {
  try {
    const response = yield getAllFloorService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllFloor(response?.data));
    } else {
      yield put(failedAllFloor(response));
    }
  } catch (error) {
    yield put(failedAllFloor(error));
  }
}

function* createFloorSaga(action) {
  try {
    const response = yield createFloorService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateFloor());
    } else {
      yield put(failedCreateFloor(response));
    }
  } catch (error) {
    yield put(failedCreateFloor(error));
  }
}

function* deleteFloorSaga(action) {
  try {
    const response = yield deleteFloorService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteFloor(response?.data));
    } else {
      yield put(failedDeleteFloor(response));
    }
  } catch (error) {
    yield put(failedDeleteFloor(error));
  }
}
function* updateFloorSaga(action) {
  try {
    const response = yield updateFloorService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateFloor(response?.data));
    } else {
      yield put(failedUpdateFloor(response));
    }
  } catch (error) {
    yield put(failedUpdateFloor(error));
  }
}

export function* watcherCreateFloorSaga() {
  yield takeLatest(requestCreateFloor.type, createFloorSaga);
}
export function* watcherAllFloorSaga() {
  yield takeLatest(requestAllFloor.type, getAllFloorsSaga);
}

export function* watcherDeleteFloorSaga() {
  yield takeLatest(requestDeleteFloor.type, deleteFloorSaga);
}
export function* watcherUpdateFloorSaga() {
  yield takeLatest(requestUpdateFloor.type, updateFloorSaga);
}
