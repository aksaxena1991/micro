import { put, takeLatest } from "redux-saga/effects";
import {
  createBankService,
  deleteBankService, getAllBankService, updateBankService
} from "../../../services/bank";
import {
  failedBank,
  failedCreateBank,
  failedDeleteBank,
  failedUpdateBank,
  requestAllBank,
  requestCreateBank,
  requestDeleteBank,
  requestUpdateBank,
  responseAllBank,
  responseCreateBank,
  responseDeleteBank,
  responseUpdateBank
} from "../../slices/BankSlice";

function* getAllBanksSaga(action) {
  try {
    const response = yield getAllBankService(action.payload);
    const { code } = response;
    if (code === 200) {

      yield put(responseAllBank(response?.data));
    } else {
      yield put(failedBank(response));
    }
  } catch (error) {
    yield put(failedBank(error));
  }
}

function* createBankSaga(action) {
  try {
    const response = yield createBankService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateBank());
    } else {
      yield put(failedCreateBank(response));
    }
  } catch (error) {
    yield put(failedCreateBank(error));
  }
}

function* deleteBankSaga(action) {
  try {
    const response = yield deleteBankService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteBank(response?.data));
    } else {
      yield put(failedDeleteBank(response));
    }
  } catch (error) {
    yield put(failedDeleteBank(error));
  }
}
function* updateBankSaga(action) {
  try {
    const response = yield updateBankService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateBank(response?.data));
    } else {
      yield put(failedUpdateBank(response));
    }
  } catch (error) {
    yield put(failedUpdateBank(error));
  }
}

export function* watcherCreateBankSaga() {
  yield takeLatest(requestCreateBank.type, createBankSaga);
}
export function* watcherAllBankSaga() {
  yield takeLatest(requestAllBank.type, getAllBanksSaga);
}

export function* watcherDeleteBankSaga() {
  yield takeLatest(requestDeleteBank.type, deleteBankSaga);
}
export function* watcherUpdateBankSaga() {
  yield takeLatest(requestUpdateBank.type, updateBankSaga);
}
