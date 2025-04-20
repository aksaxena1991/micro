import { put, takeLatest } from "redux-saga/effects";


import {  generateTemplateService} from "../../../services/generate-template";
import {  failedGenerateTemplate,  requestGenerateTemplate, responseGenerateTemplate } from "../../slices/GenerateTemplateSlice";


function* generateTemplateSaga(action) {
  try {
    const response = yield generateTemplateService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseGenerateTemplate(response?.data));
    } else {
      yield put(failedGenerateTemplate(response));
    }
  } catch (error) {
    yield put(failedGenerateTemplate(error));
  }
}



export function* watcherGenerateTemplateSaga() {
  yield takeLatest(requestGenerateTemplate.type, generateTemplateSaga);
}