import { put, takeLatest } from "redux-saga/effects";
import {
  createCompanyContactService,
  deleteCompanyContactService,
  getAllCompanyContactByCompanyIdService,
  updateCompanyContactService,
} from "../../../services/company-contacts";
import {
  failedAllCompanyContactByCompanyID,
  failedCompanyContact,
  failedCreateCompanyContact,
  failedDeleteCompanyContact,
  requestAllCompanyContactByCompanyID,
  requestCreateCompanyContact,
  requestDeleteCompanyContact,
  requestUpdateCompanyContact,
  responseAllCompanyContactByCompanyID,
  responseCreateCompanyContact,
  responseDeleteCompanyContact,
  responseUpdateCompanyContact
} from "../../slices/CompanyContactsSlice";

function* getAllCompanyContactByCompanyIdSaga(action) {
  try {
    const response = yield getAllCompanyContactByCompanyIdService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllCompanyContactByCompanyID(response?.data));
    } else {
      yield put(failedAllCompanyContactByCompanyID(response));
    }
  } catch (error) {
    yield put(failedAllCompanyContactByCompanyID(error));
  }
}

function* createCompanyContactSaga(action) {
  try {
    console.log(action.payload, "(((((((((((((")
    const response = yield createCompanyContactService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateCompanyContact());
    } else {
      yield put(failedCreateCompanyContact(response));
    }
  } catch (error) {
    yield put(failedCreateCompanyContact(error));
  }
}

function* deleteCompanyContactSaga(action) {
  try {
    const response = yield deleteCompanyContactService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteCompanyContact(response));
    } else {
      yield put(failedDeleteCompanyContact(response));
    }
  } catch (error) {
    yield put(failedDeleteCompanyContact(error));
  }
}
function* updateCompanyContactSaga(action) {
  try {
    const response = yield updateCompanyContactService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateCompanyContact(response));
    } else {
      yield put(failedCompanyContact(response));
    }
  } catch (error) {
    yield put(failedCompanyContact(error));
  }
}

export function* watcherCreateCompanyContactSaga() {
  yield takeLatest(requestCreateCompanyContact.type, createCompanyContactSaga);
}
export function* watcherAllCompanyContactByCompanyIdSaga() {
  yield takeLatest(requestAllCompanyContactByCompanyID.type, getAllCompanyContactByCompanyIdSaga);
}

export function* watcherDeleteCompanyContactSaga() {
  yield takeLatest(requestDeleteCompanyContact.type, deleteCompanyContactSaga);
}
export function* watcherUpdateCompanyContactSaga() {
  yield takeLatest(requestUpdateCompanyContact.type, updateCompanyContactSaga);
}
