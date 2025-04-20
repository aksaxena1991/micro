import { put, takeLatest } from "redux-saga/effects";
import {
  createCompanyDocumentService,
  deleteCompanyDocumentService,
  getAllCompanyDocumentByCompanyIdService,
  updateCompanyDocumentService,
} from "../../../services/company-documents";
import {
  failedAllCompanyDocumentByCompanyID,
  failedCompanyDocument,
  failedCreateCompanyDocument,
  failedDeleteCompanyDocument,
  requestAllCompanyDocumentByCompanyID,
  requestCreateCompanyDocument,
  requestDeleteCompanyDocument,
  requestUpdateCompanyDocument,
  responseAllCompanyDocumentByCompanyID,
  responseCreateCompanyDocument,
  responseDeleteCompanyDocument,
  responseUpdateCompanyDocument
} from "../../slices/CompanyDocumentsSlice";

function* getAllCompanyDocumentByCompanyIdSaga(action) {
  try {
    const response = yield getAllCompanyDocumentByCompanyIdService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllCompanyDocumentByCompanyID(response?.data));
    } else {
      yield put(failedAllCompanyDocumentByCompanyID(response));
    }
  } catch (error) {
    yield put(failedAllCompanyDocumentByCompanyID(error));
  }
}

function* createCompanyDocumentSaga(action) {
  try {
    console.log(action.payload, "(((((((((((((")
    const response = yield createCompanyDocumentService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateCompanyDocument());
    } else {
      yield put(failedCreateCompanyDocument(response));
    }
  } catch (error) {
    yield put(failedCreateCompanyDocument(error));
  }
}

function* deleteCompanyDocumentSaga(action) {
  try {
    const response = yield deleteCompanyDocumentService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteCompanyDocument(response));
    } else {
      yield put(failedDeleteCompanyDocument(response));
    }
  } catch (error) {
    yield put(failedDeleteCompanyDocument(error));
  }
}
function* updateCompanyDocumentSaga(action) {
  try {
    const response = yield updateCompanyDocumentService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateCompanyDocument(response));
    } else {
      yield put(failedCompanyDocument(response));
    }
  } catch (error) {
    yield put(failedCompanyDocument(error));
  }
}

export function* watcherCreateCompanyDocumentSaga() {
  yield takeLatest(requestCreateCompanyDocument.type, createCompanyDocumentSaga);
}
export function* watcherAllCompanyDocumentByCompanyIdSaga() {
  yield takeLatest(requestAllCompanyDocumentByCompanyID.type, getAllCompanyDocumentByCompanyIdSaga);
}

export function* watcherDeleteCompanyDocumentSaga() {
  yield takeLatest(requestDeleteCompanyDocument.type, deleteCompanyDocumentSaga);
}
export function* watcherUpdateCompanyDocumentSaga() {
  yield takeLatest(requestUpdateCompanyDocument.type, updateCompanyDocumentSaga);
}
