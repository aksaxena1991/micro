

import { put, takeLatest } from "redux-saga/effects";
import {
  createModuleService,
  deleteModuleService,
  getAllModuleService,
  getAllSubModuleService,
  updateModuleService,
} from "../../../services/module";
import {
  failedAllModule,
  failedAllSubModule,
  failedCreateModule,
  failedDeleteModule,
  failedUpdateModule,
  requestAllModule,
  requestAllSubModule,
  requestCreateModule,
  requestDeleteModule,
  requestUpdateModule,
  responseAllModule,
  responseAllSubModule,
  responseCreateModule,
  responseDeleteModule,
  responseUpdateModule,
} from "../../slices/ModuleSlice";

function* getAllModuleSaga(action) {
  try {
    const response = yield getAllModuleService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllModule(response?.data));
    } else {
      yield put(failedAllModule(response));
    }
  } catch (error) {
    yield put(failedAllModule(error));
  }
}

function* getAllSubModuleSaga(action) {
  try {
    const response = yield getAllSubModuleService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllSubModule(response?.data));
    } else {
      yield put(failedAllSubModule(response));
    }
  } catch (error) {
    yield put(failedAllSubModule(error));
  }
}

function* createModuleSaga(action) {
  try {
    const response = yield createModuleService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateModule());
    } else {
      yield put(failedCreateModule(response));
    }
  } catch (error) {
    yield put(failedCreateModule(error));
  }
}

function* deleteModuleSaga(action) {
  try {
    const response = yield deleteModuleService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteModule(response));
    } else {
      yield put(failedDeleteModule(response));
    }
  } catch (error) {
    yield put(failedDeleteModule(error));
  }
}
function* updateModuleSaga(action) {
  try {
    const response = yield updateModuleService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateModule(response));
    } else {
      yield put(failedUpdateModule(response));
    }
  } catch (error) {
    yield put(failedUpdateModule(error));
  }
}

export function* watcherCreateModuleSaga() {
  yield takeLatest(requestCreateModule.type, createModuleSaga);
}
export function* watcherAllModuleSaga() {
  yield takeLatest(requestAllModule.type, getAllModuleSaga);
}
export function* watcherAllSubModuleSaga() {
  yield takeLatest(requestAllSubModule.type, getAllSubModuleSaga);
}

export function* watcherDeleteModuleSaga() {
  yield takeLatest(requestDeleteModule.type, deleteModuleSaga);
}
export function* watcherUpdateModuleSaga() {
  yield takeLatest(requestUpdateModule.type, updateModuleSaga);
}
