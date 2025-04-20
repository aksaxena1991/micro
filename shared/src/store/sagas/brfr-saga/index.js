import { put, takeLatest } from "redux-saga/effects";
import {
  createBrFrService,
  deleteBrFrService,
  getAllBrFrByCompanyIdService,
  updateBrFrService,
} from "../../../services/brfr";
import {
  failedAllBrFrByCompanyId,
  failedCreateBrFr,
  failedDeleteBrFr,
  failedUpdateBrFr,
  requestAllBrFrByCompanyId,
  requestCreateBrFr,
  requestDeleteBrFr,
  requestUpdateBrFr,
  responseAllBrFrByCompanyId,
  responseCreateBrFr,
  responseDeleteBrFr,
  responseUpdateBrFr,
} from "../../slices/BrFrSlice";

function* getAllBrFrByCompanyIdSaga(action) {
  try {
    const response = yield getAllBrFrByCompanyIdService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllBrFrByCompanyId(response?.data));
    } else {
      yield put(failedAllBrFrByCompanyId(response));
    }
  } catch (error) {
    yield put(failedAllBrFrByCompanyId(error));
  }
}

function* createBrFrSaga(action) {
  try {
    const response = yield createBrFrService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateBrFr());
    } else {
      yield put(failedCreateBrFr(response));
    }
  } catch (error) {
    yield put(failedCreateBrFr(error));
  }
}

function* deleteBrFrSaga(action) {
  try {
    const response = yield deleteBrFrService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteBrFr(response));
    } else {
      yield put(failedDeleteBrFr(response));
    }
  } catch (error) {
    yield put(failedDeleteBrFr(error));
  }
}
function* updateBrFrSaga(action) {
  try {
    const response = yield updateBrFrService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateBrFr(response));
    } else {
      yield put(failedUpdateBrFr(response));
    }
  } catch (error) {
    yield put(failedUpdateBrFr(error));
  }
}

export function* watcherCreateBrFrSaga() {
  yield takeLatest(requestCreateBrFr.type, createBrFrSaga);
}
export function* watcherAllBrFrByCompanyIdSaga() {
  yield takeLatest(requestAllBrFrByCompanyId.type, getAllBrFrByCompanyIdSaga);
}

export function* watcherDeleteBrFrSaga() {
  yield takeLatest(requestDeleteBrFr.type, deleteBrFrSaga);
}
export function* watcherUpdateBrFrSaga() {
  yield takeLatest(requestUpdateBrFr.type, updateBrFrSaga);
}
