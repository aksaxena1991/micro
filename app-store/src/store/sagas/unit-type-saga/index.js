import { put, takeLatest } from "redux-saga/effects";
import {
  createUnitTypeService,
  deleteUnitTypeService, getAllUnitTypeService, updateUnitTypeService
} from "../../../services/unit-type";
import {
  failedAllUnitType,
  failedCreateUnitType,
  failedDeleteUnitType,
  failedUpdateUnitType,
  requestAllUnitType,
  requestCreateUnitType,
  requestDeleteUnitType,
  requestUpdateUnitType,
  responseAllUnitType,
  responseCreateUnitType,
  responseDeleteUnitType,
  responseUpdateUnitType
} from "../../slices/UnitTypeSlice";

function* getAllUnitTypesSaga(action) {
  try {
    const response = yield getAllUnitTypeService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllUnitType(response?.data));
    } else {
      yield put(failedAllUnitType(response));
    }
  } catch (error) {
    yield put(failedAllUnitType(error));
  }
}

function* createUnitTypeSaga(action) {
  try {
    const response = yield createUnitTypeService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateUnitType());
    } else {
      yield put(failedCreateUnitType(response));
    }
  } catch (error) {
    yield put(failedCreateUnitType(error));
  }
}

function* deleteUnitTypeSaga(action) {
  try {
    const response = yield deleteUnitTypeService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteUnitType(response?.data));
    } else {
      yield put(failedDeleteUnitType(response));
    }
  } catch (error) {
    yield put(failedDeleteUnitType(error));
  }
}
function* updateUnitTypeSaga(action) {
  try {
    const response = yield updateUnitTypeService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateUnitType(response?.data));
    } else {
      yield put(failedUpdateUnitType(response));
    }
  } catch (error) {
    yield put(failedUpdateUnitType(error));
  }
}

export function* watcherCreateUnitTypeSaga() {
  yield takeLatest(requestCreateUnitType.type, createUnitTypeSaga);
}
export function* watcherAllUnitTypeSaga() {
  yield takeLatest(requestAllUnitType.type, getAllUnitTypesSaga);
}

export function* watcherDeleteUnitTypeSaga() {
  yield takeLatest(requestDeleteUnitType.type, deleteUnitTypeSaga);
}
export function* watcherUpdateUnitTypeSaga() {
  yield takeLatest(requestUpdateUnitType.type, updateUnitTypeSaga);
}
