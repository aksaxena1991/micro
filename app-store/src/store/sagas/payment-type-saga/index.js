import { put, takeLatest } from "redux-saga/effects";
import {
  createPaymentTypeService,
  deletePaymentTypeService, getAllPaymentTypeService, updatePaymentTypeService
} from "../../../services/payment-type";
import {
  failedAllPaymentType,
  failedCreatePaymentType,
  failedDeletePaymentType,
  failedUpdatePaymentType,
  requestAllPaymentType,
  requestCreatePaymentType,
  requestDeletePaymentType,
  requestUpdatePaymentType,
  responseAllPaymentType,
  responseCreatePaymentType,
  responseDeletePaymentType,
  responseUpdatePaymentType
} from "../../slices/PaymentTypeSlice";

function* getAllPaymentTypesSaga(action) {
  try {
    const response = yield getAllPaymentTypeService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllPaymentType(response?.data));
    } else {
      yield put(failedAllPaymentType(response));
    }
  } catch (error) {
    yield put(failedAllPaymentType(error));
  }
}

function* createPaymentTypeSaga(action) {
  try {
    const response = yield createPaymentTypeService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreatePaymentType());
    } else {
      yield put(failedCreatePaymentType(response));
    }
  } catch (error) {
    yield put(failedCreatePaymentType(error));
  }
}

function* deletePaymentTypeSaga(action) {
  try {
    const response = yield deletePaymentTypeService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeletePaymentType(response?.data));
    } else {
      yield put(failedDeletePaymentType(response));
    }
  } catch (error) {
    yield put(failedDeletePaymentType(error));
  }
}
function* updatePaymentTypeSaga(action) {
  try {
    const response = yield updatePaymentTypeService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdatePaymentType(response?.data));
    } else {
      yield put(failedUpdatePaymentType(response));
    }
  } catch (error) {
    yield put(failedUpdatePaymentType(error));
  }
}

export function* watcherCreatePaymentTypeSaga() {
  yield takeLatest(requestCreatePaymentType.type, createPaymentTypeSaga);
}
export function* watcherAllPaymentTypeSaga() {
  yield takeLatest(requestAllPaymentType.type, getAllPaymentTypesSaga);
}

export function* watcherDeletePaymentTypeSaga() {
  yield takeLatest(requestDeletePaymentType.type, deletePaymentTypeSaga);
}
export function* watcherUpdatePaymentTypeSaga() {
  yield takeLatest(requestUpdatePaymentType.type, updatePaymentTypeSaga);
}
