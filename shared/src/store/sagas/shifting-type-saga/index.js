import { put, takeLatest } from "redux-saga/effects";
import {
  createShiftingTypeService,
  deleteShiftingTypeService, getAllShiftingTypeService, updateShiftingTypeService
} from "../../../services/shifting-type";
import {
  failedAllShiftingType,
  failedCreateShiftingType,
  failedDeleteShiftingType,
  failedUpdateShiftingType,
  requestAllShiftingType,
  requestCreateShiftingType,
  requestDeleteShiftingType,
  requestUpdateShiftingType,
  responseAllShiftingType,
  responseCreateShiftingType,
  responseDeleteShiftingType,
  responseUpdateShiftingType
} from "../../slices/ShiftingTypeSlice";

function* getAllShiftingTypesSaga(action) {
  try {
    const response = yield getAllShiftingTypeService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllShiftingType(response?.data));
    } else {
      yield put(failedAllShiftingType(response));
    }
  } catch (error) {
    yield put(failedAllShiftingType(error));
  }
}

function* createShiftingTypeSaga(action) {
  try {
    const response = yield createShiftingTypeService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateShiftingType());
    } else {
      yield put(failedCreateShiftingType(response));
    }
  } catch (error) {
    yield put(failedCreateShiftingType(error));
  }
}

function* deleteShiftingTypeSaga(action) {
  try {
    const response = yield deleteShiftingTypeService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteShiftingType(response?.data));
    } else {
      yield put(failedDeleteShiftingType(response));
    }
  } catch (error) {
    yield put(failedDeleteShiftingType(error));
  }
}
function* updateShiftingTypeSaga(action) {
  try {
    const response = yield updateShiftingTypeService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateShiftingType(response?.data));
    } else {
      yield put(failedUpdateShiftingType(response));
    }
  } catch (error) {
    yield put(failedUpdateShiftingType(error));
  }
}

export function* watcherCreateShiftingTypeSaga() {
  yield takeLatest(requestCreateShiftingType.type, createShiftingTypeSaga);
}
export function* watcherAllShiftingTypeSaga() {
  yield takeLatest(requestAllShiftingType.type, getAllShiftingTypesSaga);
}

export function* watcherDeleteShiftingTypeSaga() {
  yield takeLatest(requestDeleteShiftingType.type, deleteShiftingTypeSaga);
}
export function* watcherUpdateShiftingTypeSaga() {
  yield takeLatest(requestUpdateShiftingType.type, updateShiftingTypeSaga);
}
