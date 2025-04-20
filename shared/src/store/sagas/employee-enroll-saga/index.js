import { put, takeLatest } from "redux-saga/effects";
import {
  createEmployeeEnrollService,
  deleteEmployeeEnrollService,
  getAllEmployeeEnrollService,
  updateEmployeeEnrollService,
} from "../../../services/employeeEnroll";
import {
  failedAllEmployeeEnroll,
  failedCreateEmployeeEnroll,
  failedDeleteEmployeeEnroll,
  failedUpdateEmployeeEnroll,
  requestAllEmployeeEnroll,
  requestCreateEmployeeEnroll,
  requestDeleteEmployeeEnroll,
  requestUpdateEmployeeEnroll,
  responseAllEmployeeEnroll,
  responseCreateEmployeeEnroll,
  responseDeleteEmployeeEnroll,
  responseUpdateEmployeeEnroll,
} from "../../slices/EmployeeEnrollSlice";

function* getAllEmployeeEnrollSaga(action) {
  try {
    const response = yield getAllEmployeeEnrollService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllEmployeeEnroll(response?.data));
    } else {
      yield put(failedAllEmployeeEnroll(response));
    }
  } catch (error) {
    yield put(failedAllEmployeeEnroll(error));
  }
}

function* createEmployeeEnrollSaga(action) {
  try {
    const response = yield createEmployeeEnrollService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateEmployeeEnroll());
    } else {
      yield put(failedCreateEmployeeEnroll(response));
    }
  } catch (error) {
    yield put(failedCreateEmployeeEnroll(error));
  }
}

function* deleteEmployeeEnrollSaga(action) {
  try {
    const response = yield deleteEmployeeEnrollService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteEmployeeEnroll(response));
    } else {
      yield put(failedDeleteEmployeeEnroll(response));
    }
  } catch (error) {
    yield put(failedDeleteEmployeeEnroll(error));
  }
}
function* updateEmployeeEnrollSaga(action) {
  try {
    const response = yield updateEmployeeEnrollService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateEmployeeEnroll(response));
    } else {
      yield put(failedUpdateEmployeeEnroll(response));
    }
  } catch (error) {
    yield put(failedUpdateEmployeeEnroll(error));
  }
}

export function* watcherCreateEmployeeEnrollSaga() {
  yield takeLatest(
    requestCreateEmployeeEnroll.type,
    createEmployeeEnrollSaga,
  );
}
export function* watcherAllEmployeeEnrollSaga() {
  yield takeLatest(requestAllEmployeeEnroll.type, getAllEmployeeEnrollSaga);
}

export function* watcherDeleteEmployeeEnrollSaga() {
  yield takeLatest(
    requestDeleteEmployeeEnroll.type,
    deleteEmployeeEnrollSaga,
  );
}
export function* watcherUpdateEmployeeEnrollSaga() {
  yield takeLatest(
    requestUpdateEmployeeEnroll.type,
    updateEmployeeEnrollSaga,
  );
}
