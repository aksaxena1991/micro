import { put, takeLatest } from "redux-saga/effects";
import { createSignatureService, deleteSignatureService, getAllSignatureService, updateSignatureService } from "../../../services/signature";
import { failedAllSignatureByBrFrIDOrCompanyID, failedCreateSignature, failedDeleteSignature, failedUpdateSignature, requestAllSignatureByBrFrIDOrCompanyID, requestCreateSignature, requestDeleteSignature, requestUpdateSignature, responseAllSignatureByBrFrIDOrCompanyID, responseCreateSignature, responseDeleteSignature, responseUpdateSignature } from "../../slices/SignatureSlice";




function* createSignatureSaga(action) {
  try {
    const response = yield createSignatureService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateSignature(response.data));
    } else {
      yield put(responseCreateSignature(response));
    }
  } catch (error) {
    yield put(failedCreateSignature(error));
  }
}
function* getAllSignatureByBrFrIDOrCompanyIDSaga(action) {
  try {
    const response = yield getAllSignatureService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllSignatureByBrFrIDOrCompanyID(response?.data));
    } else {
      yield put(failedAllSignatureByBrFrIDOrCompanyID(response));
    }
  } catch (error) {
    yield put(failedAllSignatureByBrFrIDOrCompanyID(error));
  }
}

function* deleteSignatureSaga(action) {
  try {
    const response = yield deleteSignatureService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteSignature(response?.data));
    } else {
      yield put(failedDeleteSignature(response));
    }
  } catch (error) {
    yield put(failedDeleteSignature(error));
  }
}
function* updateSignatureSaga(action) {
  try {
    const response = yield updateSignatureService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateSignature(response?.data));
    } else {
      yield put(failedUpdateSignature(response));
    }
  } catch (error) {
    yield put(failedUpdateSignature(error));
  }
}

export function* watcherCreateSignatureSaga() {
  yield takeLatest(requestCreateSignature.type, createSignatureSaga);
}
export function* watcherDeleteSignatureSaga() {
  yield takeLatest(requestDeleteSignature.type, deleteSignatureSaga);
}
export function* watcherUpdateSignatureSaga() {
  yield takeLatest(requestUpdateSignature.type, updateSignatureSaga);
}
export function* watcherGetAllSignatureByBrFrIDOrCompanyIDSaga() {
  yield takeLatest(requestAllSignatureByBrFrIDOrCompanyID.type, getAllSignatureByBrFrIDOrCompanyIDSaga);
}