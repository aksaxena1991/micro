import { put, takeLatest } from "redux-saga/effects";
import {
  createGovtRegistrationService,
  deleteGovtRegistrationService,
  getAllGovtRegistrationByCompanyIdOrBrFrIdService,
  updateGovtRegistrationService
} from "../../../services/govt-registration";
import {
  failedCreateGovtRegistration,
  failedDeleteGovtRegistration,
  failedUpdateGovtRegistration,

  requestCreateGovtRegistration,
  requestDeleteGovtRegistration,
  requestUpdateGovtRegistration,

  responseCreateGovtRegistration,
  responseDeleteGovtRegistration,
  responseUpdateGovtRegistration,

  requestAllGovtRegistrationByCompanyIDOrBrFrID,
  responseAllGovtRegistrationByCompanyIDOrBrFrID,
  failedAllGovtRegistrationByCompanyIDOrBrFrID

} from "../../slices/GovtRegistrationSlice";

function* getAllGovtRegistrationByCompanyIdOrBrFrIdSaga(action) {
  try {
    const response = yield getAllGovtRegistrationByCompanyIdOrBrFrIdService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllGovtRegistrationByCompanyIDOrBrFrID(response?.data));
    } else {
      yield put(failedAllGovtRegistrationByCompanyIDOrBrFrID(response));
    }
  } catch (error) {
    yield put(failedAllGovtRegistrationByCompanyIDOrBrFrID(error));
  }
}

function* createGovtRegistrationSaga(action) {
  try {
    const response = yield createGovtRegistrationService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateGovtRegistration());
    } else {
      yield put(failedCreateGovtRegistration(response));
    }
  } catch (error) {
    yield put(failedCreateGovtRegistration(error));
  }
}

function* deleteGovtRegistrationSaga(action) {
  try {
    const response = yield deleteGovtRegistrationService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteGovtRegistration(response));
    } else {
      yield put(failedDeleteGovtRegistration(response));
    }
  } catch (error) {
    yield put(failedDeleteGovtRegistration(error));
  }
}
function* updateGovtRegistrationSaga(action) {
  try {
    const response = yield updateGovtRegistrationService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateGovtRegistration(response));
    } else {
      yield put(failedUpdateGovtRegistration(response));
    }
  } catch (error) {
    yield put(failedUpdateGovtRegistration(error));
  }
}

export function* watcherCreateGovtRegistrationSaga() {
  yield takeLatest(requestCreateGovtRegistration.type, createGovtRegistrationSaga);
}


export function* watcherDeleteGovtRegistrationSaga() {
  yield takeLatest(requestDeleteGovtRegistration.type, deleteGovtRegistrationSaga);
}
export function* watcherUpdateGovtRegistrationSaga() {
  yield takeLatest(requestUpdateGovtRegistration.type, updateGovtRegistrationSaga);
}
export function* watcherGetAllGovtRegistrationByCompanyIdOrBrFrIdSaga() {
  yield takeLatest(requestAllGovtRegistrationByCompanyIDOrBrFrID.type, getAllGovtRegistrationByCompanyIdOrBrFrIdSaga);
}
