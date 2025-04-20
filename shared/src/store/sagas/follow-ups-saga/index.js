import { put, takeLatest } from "redux-saga/effects";
import {
  createFollowUpService,
  getAllFollowUpByEOCIDService,
} from "../../../services/follow-ups";
import {
  failedAllFollowUpsByEOCID,
  failedCreateFollowUp,
  requestAllFollowUpsByEOCID,
  requestCreateFollowUp,
  responseAllFollowUpsByEOCID,
  responseCreateFollowUp
} from "../../slices/FollowUpsSlice";

function* getAllFollowUpsByEOCIDSaga(action) {
  try {

    const response = yield getAllFollowUpByEOCIDService(action.payload);
    const { code } = response;

    if (code === 200) {
      yield put(responseAllFollowUpsByEOCID(response?.data));
    } else {
      yield put(failedAllFollowUpsByEOCID(response));
    }
  } catch (error) {
    yield put(failedAllFollowUpsByEOCID(error));
  }
}

function* createFollowUpSaga(action) {
  try {
    const response = yield createFollowUpService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateFollowUp(response?.data));
    } else {
      yield put(failedCreateFollowUp(response));
    }
  } catch (error) {
    yield put(failedCreateFollowUp(error));
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

export function* watcherCreateFollowUpSaga() {
  yield takeLatest(requestCreateFollowUp.type, createFollowUpSaga);
}
export function* watcherAllFollowUpsByEOCIDSaga() {
  yield takeLatest(requestAllFollowUpsByEOCID.type, getAllFollowUpsByEOCIDSaga);
}

// export function* watcherDeleteFollowUpSaga() {
//   yield takeLatest(requestDeleteFollowUp.type, deleteFollowUpSaga);
// }
// export function* watcherUpdateFollowUpSaga() {
//   yield takeLatest(requestUpdateFollowUp.type, updateFollowUpSaga);
// }
