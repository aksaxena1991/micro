import { put, takeLatest } from "redux-saga/effects";
import {
  createSerialSettingService,
  deleteSerialSettingService,
  getAllSerialSettingByCompanyIdOrBrFrIDService,
  getSerialSettingByCompanyIdBrFrIdModuleName,
  updateSerialSettingService
} from "../../../services/serial-setting";
import {
  failedAllSerialSettingByCompanyIDOrBrFrID,
  failedCreateSerialSetting,
  failedDeleteSerialSetting,
  failedSerialSettingByCompanyIdBrFrIdModuleName,
  failedUpdateSerialSetting,
  requestAllSerialSettingByCompanyIDOrBrFrID,
  requestCreateSerialSetting,
  requestDeleteSerialSetting,
  requestSerialSettingByCompanyIdBrFrIdModuleName,
  requestUpdateSerialSetting,
  responseAllSerialSettingByCompanyIDOrBrFrID,
  responseCreateSerialSetting,
  responseDeleteSerialSetting,
  responseSerialSettingByCompanyIdBrFrIdModuleName,
  responseUpdateSerialSetting
} from "../../slices/SerialSettingSlice";

function* getAllSerialSettingByCompanyIdOrBrFrIdSaga(action) {
  try {
    const response = yield getAllSerialSettingByCompanyIdOrBrFrIDService(action.payload);
    if (response?.data) {
      yield put(responseAllSerialSettingByCompanyIDOrBrFrID(response?.data));
    } else {
      yield put(failedAllSerialSettingByCompanyIDOrBrFrID(response))
    }
  } catch (error) {

    yield put(failedAllSerialSettingByCompanyIDOrBrFrID(error));
  }
}

export function* watcherAllSerialSettingByCompanyIdSaga() {
  yield takeLatest(requestAllSerialSettingByCompanyIDOrBrFrID, getAllSerialSettingByCompanyIdOrBrFrIdSaga);
}

function* createSerialSettingSaga(action) {
  try {
    const response = yield createSerialSettingService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateSerialSetting());
    } else {
      yield put(failedCreateSerialSetting(response));
    }
  } catch (error) {
    yield put(failedCreateSerialSetting(error));
  }
}

function* getSerialSettingByCompanyIdBrFrIdModuleNameSaga(action) {
  try {
    const response = yield getSerialSettingByCompanyIdBrFrIdModuleName(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseSerialSettingByCompanyIdBrFrIdModuleName(response?.data))
    } else {
      yield put(failedSerialSettingByCompanyIdBrFrIdModuleName(response?.data));
    }
  } catch (error) {
    yield put(failedSerialSettingByCompanyIdBrFrIdModuleName(error));
  }
}
function* updateSerialSettingSaga(action) {
  try {
    const response = yield updateSerialSettingService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateSerialSetting(response));
    } else {
      yield put(failedUpdateSerialSetting(response));
    }
  } catch (error) {
    yield put(failedUpdateSerialSetting(error));
  }
}
function* deleteSerialSettingSaga(action) {
  try {
    const response = yield deleteSerialSettingService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteSerialSetting(response));
    } else {
      yield put(failedDeleteSerialSetting(response));
    }
  } catch (error) {
    yield put(failedDeleteSerialSetting(error));
  }
}

export function* watcherCreateSerialSettingSaga() {
  yield takeLatest(requestCreateSerialSetting.type, createSerialSettingSaga);
}


export function* watcherGetSerialSettingByCompanyIdBrFrIdModuleNameSaga() {
  yield takeLatest(requestSerialSettingByCompanyIdBrFrIdModuleName.type, getSerialSettingByCompanyIdBrFrIdModuleNameSaga);
}
export function* watcherUpdateSerialSettingSaga() {
  yield takeLatest(requestUpdateSerialSetting.type, updateSerialSettingSaga);
}
export function* watcherDeleteSerialSettingSaga() {
  yield takeLatest(requestDeleteSerialSetting.type, deleteSerialSettingSaga);
}
