import { put, takeLatest } from "redux-saga/effects";
import {
  createSetSurveyService,
  getAllSetSurveyByEOCIDService
} from "../../../services/set-survey";
import {
  failedAllSetSurveyByEOCID,
  failedCreateSetSurvey,
  requestAllSetSurveyByEOCID,
  requestCreateSetSurvey,
  responseAllSetSurveyByEOCID,
  responseCreateSetSurvey
} from "../../slices/SetSurveySlice";

function* getAllSetSurveyByEOCIDSaga(action) {
  try {

    const response = yield getAllSetSurveyByEOCIDService(action.payload);
    const { code } = response;

    if (code === 200) {
      yield put(responseAllSetSurveyByEOCID(response?.data));
    } else {
      yield put(failedAllSetSurveyByEOCID(response));
    }
  } catch (error) {
    yield put(failedAllSetSurveyByEOCID(error));
  }
}

function* createSetSurveySaga(action) {
  try {
    const response = yield createSetSurveyService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateSetSurvey());
    } else {
      yield put(failedCreateSetSurvey(response));
    }
  } catch (error) {
    yield put(failedCreateSetSurvey(error));
  }
}

// function* deleteFollowUpSaga(action) {
//   try {
//     const response = yield deleteFollowUpService(action.payload);
//     const { code } = response;
//     if (code === 200) {
//       yield put(responseDeleteFollowUp(response?.data));
//     } else {
//       yield put(failedDeleteFollowUp(response));
//     }
//   } catch (error) {
//     yield put(failedDeleteFollowUp(error));
//   }
// }
// function* updateFollowUpSaga(action) {
//   try {
//     const response = yield updateFollowUpService(action.payload);
//     const { code } = response;
//     if (code === 200) {
//       yield put(responseUpdateFollowUp(response?.data));
//     } else {
//       yield put(failedUpdateFollowUp(response));
//     }
//   } catch (error) {
//     yield put(failedUpdateFollowUp(error));
//   }
// }

export function* watcherCreateSetSurveySaga() {
  yield takeLatest(requestCreateSetSurvey.type, createSetSurveySaga);
}
export function* watcherAllSetSurveyByEOCIDSaga() {
  yield takeLatest(requestAllSetSurveyByEOCID.type, getAllSetSurveyByEOCIDSaga);
}

// export function* watcherDeleteSetSurveyaga() {
//   yield takeLatest(requestDeleteFollowUp.type, deleteSetSurveyaga);
// }
// export function* watcherUpdateSetSurveyaga() {
//   yield takeLatest(requestUpdateFollowUp.type, updateSetSurveyaga);
// }
