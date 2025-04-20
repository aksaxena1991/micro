import { put, takeLatest } from "redux-saga/effects";
import {
  createEnquiryService, deleteEnquiryService, getEnquiryByBrFrIDOrCompanyIDService, getEnquiryByIDService, updateEnquiryService
} from "../../../services/enquiry";
import {
  failedAllEnquiryByBrFrIDOrCompanyID,
  failedCreateEnquiry,
  failedDeleteEnquiry,
  failedSelectedEnquiry,
  failedUpdateEnquiry,
  requestAllEnquiryByBrFrIDOrCompanyID,
  requestCreateEnquiry,
  requestDeleteEnquiry,
  requestSelectedEnquiry,
  requestUpdateEnquiry,
  responseAllEnquiryByBrFrIDOrCompanyID,
  responseCreateEnquiry,
  responseDeleteEnquiry,
  responseSelectedEnquiry,
  responseUpdateEnquiry
} from "../../slices/EnquirySlice";



function* createEnquirySaga(action) {
  try {
    const response = yield createEnquiryService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateEnquiry());
    } else {
      yield put(failedCreateEnquiry(response));
    }
  } catch (error) {
    yield put(failedCreateEnquiry(error));
  }
}

function* deleteEnquirySaga(action) {
  try {
    const response = yield deleteEnquiryService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteEnquiry(response?.data));
    } else {
      yield put(failedDeleteEnquiry(response));
    }
  } catch (error) {
    yield put(failedDeleteEnquiry(error));
  }
}
function* getEnquiryByBrFrIDOrCompanyIDSaga(action) {
  try {
    const response = yield getEnquiryByBrFrIDOrCompanyIDService(action.payload);
    const { code } = response;

    if (code === 200) {

      yield put(responseAllEnquiryByBrFrIDOrCompanyID(response?.data));
    } else {
      yield put(failedAllEnquiryByBrFrIDOrCompanyID(response));
    }
  } catch (error) {
    yield put(failedAllEnquiryByBrFrIDOrCompanyID(error));
  }
}
function* selectedEnquirySaga(action) {
  try {
    yield put(responseSelectedEnquiry(action.payload))
  }
  catch (error) {
    yield put(failedSelectedEnquiry(error))
  }
}

function* updateEnquirySaga(action) {
  try {
    const response = yield updateEnquiryService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateEnquiry(response?.data));
    } else {
      yield put(failedUpdateEnquiry(response));
    }
  } catch (error) {
    yield put(failedUpdateEnquiry(error));
  }
}

export function* watcherCreateEnquirySaga() {
  yield takeLatest(requestCreateEnquiry.type, createEnquirySaga);
}
export function* watcherSelectedEnquirySaga() {
  yield takeLatest(requestSelectedEnquiry.type, selectedEnquirySaga);
}



export function* watcherDeleteEnquirySaga() {
  yield takeLatest(requestDeleteEnquiry.type, deleteEnquirySaga);
}
export function* watcherUpdateEnquirySaga() {
  yield takeLatest(requestUpdateEnquiry.type, updateEnquirySaga);
}
export function* watcherGetEnquiryByBrFrIDOrCompanyIDSaga() {
  yield takeLatest(requestAllEnquiryByBrFrIDOrCompanyID.type, getEnquiryByBrFrIDOrCompanyIDSaga);
}
