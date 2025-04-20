import { put, takeLatest } from "redux-saga/effects";
import {
  createTemplateService,
  deleteTemplateService,
  getAllTemplateService,
  updateTemplateService,
} from "../../../services/template";
import {
  failedAllTemplate,
  failedCreateTemplate,
  failedDeleteTemplate,
  failedUpdateTemplate,
  requestAllTemplate,
  requestCreateTemplate,
  requestDeleteTemplate,
  requestUpdateTemplate,
  responseAllTemplate,
  responseCreateTemplate,
  responseDeleteTemplate,
  responseUpdateTemplate,
} from "../../slices/TemplateSlice";

function* createTemplateSaga(action) {
  try {
    const response = yield createTemplateService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateTemplate());
    } else {
      yield put(failedCreateTemplate(response));
    }
  } catch (error) {
    yield put(failedCreateTemplate(error));
  }
}

function* updateTemplateSaga(action) {
  try {
    const response = yield updateTemplateService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateTemplate(response));
    } else {
      yield put(failedUpdateTemplate(response));
    }
  } catch (error) {
    yield put(failedUpdateTemplate(error));
  }
}
function* getAllTemplateSaga() {
  try {
    const response = yield getAllTemplateService();
    const { code } = response;
    
    if (code === 200) {
      yield put(responseAllTemplate(response?.data));
    } else {
      yield put(failedAllTemplate(response));
    }
  } catch (error) {
    yield put(failedAllTemplate(error));
  }
}
function* deleteTemplateSaga(action) {
  try {
    const response = yield deleteTemplateService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteTemplate(response));
    } else {
      yield put(failedDeleteTemplate(response));
    }
  } catch (error) {
    yield put(failedDeleteTemplate(error));
  }
}

export function* watcherCreateTemplateSaga() {
  yield takeLatest(requestCreateTemplate.type, createTemplateSaga);
}
export function* watcherGetAllTemplateSaga() {
  yield takeLatest(requestAllTemplate.type, getAllTemplateSaga);
}

export function* watcherUpdateTemplateSaga() {
  yield takeLatest(requestUpdateTemplate.type, updateTemplateSaga);
}
export function* watcherDeleteTemplateSaga() {
  yield takeLatest(requestDeleteTemplate.type, deleteTemplateSaga);
}
