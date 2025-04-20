import { put, takeLatest } from "redux-saga/effects";
import {
  createAccountService,
  deleteAccountService,
  getAllAccountsByCompanyIDService,
  updateAccountService
} from "../../../services/account";
import {
  failedAllAccountByCompanyID,
  failedCreateAccount,
  failedDeleteAccount,
  failedUpdateAccount,
  requestAllAccountByCompanyID,
  requestCreateAccount,
  requestDeleteAccount,
  requestUpdateAccount,
  responseAllAccountByCompanyID,
  responseCreateAccount,
  responseDeleteAccount,
  responseUpdateAccount
} from "../../slices/AccountSlice";



function* createAccountSaga(action) {
  try {
    const response = yield createAccountService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateAccount());
    } else {
      yield put(failedCreateAccount(response));
    }
  } catch (error) {
    yield put(failedCreateAccount(error));
  }
}
function* getAllAccountsByCompanyIDSaga(action) {
  try {
    const response = yield getAllAccountsByCompanyIDService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllAccountByCompanyID(response?.data));
    } else {
      yield put(failedAllAccountByCompanyID(response));
    }
  } catch (error) {
    yield put(failedAllAccountByCompanyID(error));
  }
}

function* updateAccountSaga(action) {
  try {
    const response = yield updateAccountService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateAccount(response?.data));
    } else {
      yield put(failedUpdateAccount(response));
    }
  } catch (error) {
    yield put(failedUpdateAccount(error));
  }
}
function* deleteAccountSaga(action) {
  try {
    const response = yield deleteAccountService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteAccount(response?.data));
    } else {
      yield put(failedDeleteAccount(response));
    }
  } catch (error) {
    yield put(failedDeleteAccount(error));
  }
}

export function* watcherCreateAccountSaga() {
  yield takeLatest(requestCreateAccount.type, createAccountSaga);
}
export function* watcherGetAllAccountsByCompanyIDSaga() {
  yield takeLatest(requestAllAccountByCompanyID.type, getAllAccountsByCompanyIDSaga);
}
export function* watcherUpdateAccountSaga() {
  yield takeLatest(requestUpdateAccount.type, updateAccountSaga);
}
export function* watcherDeleteAccountSaga() {
  yield takeLatest(requestDeleteAccount.type, deleteAccountSaga);
}