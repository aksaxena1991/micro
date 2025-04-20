import { put, takeLatest } from "redux-saga/effects";
import {
  createDocumentFooterContentService,
  deleteDocumentFooterContentService,
  getAllDocumentFooterContentByCompanyIdService,
  updateDocumentFooterContentService,
} from "../../../services/document-footer-content";
import {
  failedAllDocumentFooterContentByCompanyID,
  failedCreateDocumentFooterContent,
  failedDeleteDocumentFooterContent,
  failedUpdateDocumentFooterContent,
  requestAllDocumentFooterContentByCompanyID,
  requestCreateDocumentFooterContent,
  requestDeleteDocumentFooterContent,
  requestUpdateDocumentFooterContent,
  responseAllDocumentFooterContentByCompanyID,
  responseCreateDocumentFooterContent,
  responseDeleteDocumentFooterContent,
  responseUpdateDocumentFooterContent
} from "../../slices/DocumentFooterContentSlice";

function* getAllDocumentFooterContentByCompanyIdSaga(action) {
  try {
    const response = yield getAllDocumentFooterContentByCompanyIdService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllDocumentFooterContentByCompanyID(response?.data));
    } else {
      yield put(failedAllDocumentFooterContentByCompanyID(response));
    }
  } catch (error) {
    yield put(failedAllDocumentFooterContentByCompanyID(error));
  }
}

function* createDocumentFooterContentSaga(action) {
  try {
    const response = yield createDocumentFooterContentService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateDocumentFooterContent());
    } else {
      yield put(failedCreateDocumentFooterContent(response));
    }
  } catch (error) {
    yield put(failedCreateDocumentFooterContent(error));
  }
}

function* deleteDocumentFooterContentSaga(action) {
  try {
    const response = yield deleteDocumentFooterContentService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteDocumentFooterContent(response));
    } else {
      yield put(failedDeleteDocumentFooterContent(response));
    }
  } catch (error) {
    yield put(failedDeleteDocumentFooterContent(error));
  }
}
function* updateDocumentFooterContentSaga(action) {
  try {
    const response = yield updateDocumentFooterContentService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateDocumentFooterContent(response));
    } else {
      yield put(failedUpdateDocumentFooterContent(response));
    }
  } catch (error) {
    yield put(failedUpdateDocumentFooterContent(error));
  }
}

export function* watcherCreateDocumentFooterContentSaga() {
  yield takeLatest(requestCreateDocumentFooterContent.type, createDocumentFooterContentSaga);
}
export function* watcherAllDocumentFooterContentByCompanyIdSaga() {
  yield takeLatest(requestAllDocumentFooterContentByCompanyID.type, getAllDocumentFooterContentByCompanyIdSaga);
}

export function* watcherDeleteDocumentFooterContentSaga() {
  yield takeLatest(requestDeleteDocumentFooterContent.type, deleteDocumentFooterContentSaga);
}
export function* watcherUpdateDocumentFooterContentSaga() {
  yield takeLatest(requestUpdateDocumentFooterContent.type, updateDocumentFooterContentSaga);
}
