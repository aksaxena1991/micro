import { put, takeLatest } from "redux-saga/effects";
import {
  createFeatureService,
  deleteFeatureService,
  getAllFeatureService,
  updateFeatureService,
} from "../../../services/feature";
import {
  failedAllFeature,
  failedCreateFeature,
  failedDeleteFeature,
  failedUpdateFeature,
  requestAllFeature,
  requestCreateFeature,
  requestDeleteFeature,
  requestUpdateFeature,
  responseAllFeature,
  responseCreateFeature,
  responseDeleteFeature,
  responseUpdateFeature,
} from "../../slices/FeatureSlice";

function* getAllFeatureSaga(action) {
  try {
    const response = yield getAllFeatureService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllFeature(response?.data));
    } else {
      yield put(failedAllFeature(response));
    }
  } catch (error) {
    yield put(failedAllFeature(error));
  }
}

function* createFeatureSaga(action) {
  try {
    const response = yield createFeatureService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateFeature());
    } else {
      yield put(failedCreateFeature(response));
    }
  } catch (error) {
    yield put(failedCreateFeature(error));
  }
}

function* deleteFeatureSaga(action) {
  try {
    const response = yield deleteFeatureService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteFeature(response));
    } else {
      yield put(failedDeleteFeature(response));
    }
  } catch (error) {
    yield put(failedDeleteFeature(error));
  }
}
function* updateFeatureSaga(action) {
  try {
    const response = yield updateFeatureService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateFeature(response));
    } else {
      yield put(failedUpdateFeature(response));
    }
  } catch (error) {
    yield put(failedUpdateFeature(error));
  }
}

export function* watcherCreateFeatureSaga() {
  yield takeLatest(requestCreateFeature.type, createFeatureSaga);
}
export function* watcherAllFeatureSaga() {
  yield takeLatest(requestAllFeature.type, getAllFeatureSaga);
}

export function* watcherDeleteFeatureSaga() {
  yield takeLatest(requestDeleteFeature.type, deleteFeatureSaga);
}
export function* watcherUpdateFeatureSaga() {
  yield takeLatest(requestUpdateFeature.type, updateFeatureSaga);
}
