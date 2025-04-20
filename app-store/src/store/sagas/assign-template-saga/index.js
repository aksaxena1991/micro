import { put, takeLatest } from "redux-saga/effects";


import { createAssignTemplateService, deleteAssignTemplateService, getAllAssignTemplateByBrFrIDOrCompanyIDService, updateAssignTemplateService } from "../../../services/assign-template";
import { failedAllAssignTemplateByBrFrIdOrCompanyId, failedCreateAssignTemplate, failedDeleteAssignTemplate, failedUpdateAssignTemplate, requestAllAssignTemplateByBrFrIdOrCompanyId, requestCreateAssignTemplate, requestDeleteAssignTemplate, requestUpdateAssignTemplate, responseAllAssignTemplateByBrFrIdOrCompanyId, responseCreateAssignTemplate, responseDeleteAssignTemplate, responseUpdateAssignTemplate } from "../../slices/AssignTemplateSlice";

function* createAssignTemplateSaga(action) {
  try {
    const response = yield createAssignTemplateService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateAssignTemplate(response?.data));
    } else {
      yield put(failedCreateAssignTemplate(response));
    }
  } catch (error) {
    yield put(failedCreateAssignTemplate(error));
  }
}

function* updateAssignTemplateSaga(action) {
  try {
    const response = yield updateAssignTemplateService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateAssignTemplate(response));
    } else {
      yield put(failedUpdateAssignTemplate(response));
    }
  } catch (error) {
    yield put(failedUpdateAssignTemplate(error));
  }
}
function* getAllAssignTemplateByBrFrIdOrCompanyIdSaga(action) {
  try {
    const response = yield getAllAssignTemplateByBrFrIDOrCompanyIDService(action?.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllAssignTemplateByBrFrIdOrCompanyId(response?.data));
    } else {
      yield put(failedAllAssignTemplateByBrFrIdOrCompanyId(response));
    }
  } catch (error) {
    yield put(failedAllAssignTemplateByBrFrIdOrCompanyId(error));
  }
}
function* deleteAssignTemplateSaga(action) {
  try {
    const response = yield deleteAssignTemplateService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteAssignTemplate(response));
    } else {
      yield put(failedDeleteAssignTemplate(response));
    }
  } catch (error) {
    yield put(failedDeleteAssignTemplate(error));
  }
}

export function* watcherCreateAssignTemplateSaga() {
  yield takeLatest(requestCreateAssignTemplate.type, createAssignTemplateSaga);
}
export function* watcherGetAllAssignTemplateByBrFrIdOrCompanyIdSaga() {
  yield takeLatest(requestAllAssignTemplateByBrFrIdOrCompanyId.type, getAllAssignTemplateByBrFrIdOrCompanyIdSaga);
}

export function* watcherUpdateAssignTemplateSaga() {
  yield takeLatest(requestUpdateAssignTemplate.type, updateAssignTemplateSaga);
}
export function* watcherDeleteAssignTemplateSaga() {
  yield takeLatest(requestDeleteAssignTemplate.type, deleteAssignTemplateSaga);
}
