import { put, takeLatest } from "redux-saga/effects";
import {
  createPackingMaterialService,
  getAllPackingMaterialByEOCIDService
} from "../../../services/packing-material";
import {
  failedAllPackingMaterialByEOCID,
  failedCreatePackingMaterial,
  requestAllPackingMaterialByEOCID,
  requestCreatePackingMaterial,
  responseAllPackingMaterialByEOCID,
  responseCreatePackingMaterial
} from "../../slices/PackingMaterialSlice";

function* getAllPackingMaterialByEOCIDSaga(action) {
  try {

    const response = yield getAllPackingMaterialByEOCIDService(action.payload);
    const { code } = response;

    if (code === 200) {
      yield put(responseAllPackingMaterialByEOCID(response?.data));
    } else {
      yield put(failedAllPackingMaterialByEOCID(response));
    }
  } catch (error) {
    yield put(failedAllPackingMaterialByEOCID(error));
  }
}

function* createPackingMaterialSaga(action) {
  try {
    const response = yield createPackingMaterialService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreatePackingMaterial());
    } else {
      yield put(failedCreatePackingMaterial(response));
    }
  } catch (error) {
    yield put(failedCreatePackingMaterial(error));
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

export function* watcherCreatePackingMaterialSaga() {
  yield takeLatest(requestCreatePackingMaterial.type, createPackingMaterialSaga);
}
export function* watcherAllPackingMaterialByEOCIDSaga() {
  yield takeLatest(requestAllPackingMaterialByEOCID.type, getAllPackingMaterialByEOCIDSaga);
}

// export function* watcherDeletePackingMaterialaga() {
//   yield takeLatest(requestDeleteFollowUp.type, deletePackingMaterialaga);
// }
// export function* watcherUpdatePackingMaterialaga() {
//   yield takeLatest(requestUpdateFollowUp.type, updatePackingMaterialaga);
// }
