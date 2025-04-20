import { put, takeLatest } from "redux-saga/effects";
import {
  createPaymentModeService,
  deletePaymentModeService, getAllPaymentModeService, updatePaymentModeService
} from "../../../services/payment-mode";
import {
  failedAllPaymentMode,
  failedCreatePaymentMode,
  failedDeletePaymentMode,
  failedUpdatePaymentMode,
  requestAllPaymentMode,
  requestCreatePaymentMode,
  requestDeletePaymentMode,
  requestUpdatePaymentMode,
  responseAllPaymentMode,
  responseCreatePaymentMode,
  responseDeletePaymentMode,
  responseUpdatePaymentMode
} from "../../slices/PaymentModeSlice";

function* getAllPaymentModesSaga(action) {
  try {
    const response = yield getAllPaymentModeService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllPaymentMode(response?.data));
    } else {
      yield put(failedAllPaymentMode(response));
    }
  } catch (error) {
    yield put(failedAllPaymentMode(error));
  }
}

function* createPaymentModeSaga(action) {
  try {
    const response = yield createPaymentModeService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreatePaymentMode());
    } else {
      yield put(failedCreatePaymentMode(response));
    }
  } catch (error) {
    yield put(failedCreatePaymentMode(error));
  }
}

function* deletePaymentModeSaga(action) {
  try {
    const response = yield deletePaymentModeService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeletePaymentMode(response?.data));
    } else {
      yield put(failedDeletePaymentMode(response));
    }
  } catch (error) {
    yield put(failedDeletePaymentMode(error));
  }
}
function* updatePaymentModeSaga(action) {
  try {
    const response = yield updatePaymentModeService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdatePaymentMode(response?.data));
    } else {
      yield put(failedUpdatePaymentMode(response));
    }
  } catch (error) {
    yield put(failedUpdatePaymentMode(error));
  }
}

export function* watcherCreatePaymentModeSaga() {
  yield takeLatest(requestCreatePaymentMode.type, createPaymentModeSaga);
}
export function* watcherAllPaymentModeSaga() {
  yield takeLatest(requestAllPaymentMode.type, getAllPaymentModesSaga);
}

export function* watcherDeletePaymentModeSaga() {
  yield takeLatest(requestDeletePaymentMode.type, deletePaymentModeSaga);
}
export function* watcherUpdatePaymentModeSaga() {
  yield takeLatest(requestUpdatePaymentMode.type, updatePaymentModeSaga);
}
