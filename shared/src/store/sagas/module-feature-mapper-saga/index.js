import { put, takeLatest } from "redux-saga/effects";
import {
  createModuleFeatureMapperService,
  deleteModuleFeatureMapperService,
  getAllModuleFeatureMapperService,
  updateModuleFeatureMapperService,
} from "../../../services/module-feature-mapper";
import {
  failedAllModuleFeatureMapper,
  failedCreateModuleFeatureMapper,
  failedDeleteModuleFeatureMapper,
  failedUpdateModuleFeatureMapper,
  requestAllModuleFeatureMapper,
  requestCreateModuleFeatureMapper,
  requestDeleteModuleFeatureMapper,
  requestUpdateModuleFeatureMapper,
  responseAllModuleFeatureMapper,
  responseCreateModuleFeatureMapper,
  responseDeleteModuleFeatureMapper,
  responseUpdateModuleFeatureMapper,
} from "../../slices/ModuleFeatureMapperSlice";

function* getAllModuleFeatureMapperSaga(action) {
  try {
    const response = yield getAllModuleFeatureMapperService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllModuleFeatureMapper(response?.data));
    } else {
      yield put(failedAllModuleFeatureMapper(response));
    }
  } catch (error) {
    yield put(failedAllModuleFeatureMapper(error));
  }
}

function* createModuleFeatureMapperSaga(action) {
  try {
    const response = yield createModuleFeatureMapperService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateModuleFeatureMapper());
    } else {
      yield put(failedCreateModuleFeatureMapper(response));
    }
  } catch (error) {
    yield put(failedCreateModuleFeatureMapper(error));
  }
}

function* deleteModuleFeatureMapperSaga(action) {
  try {
    const response = yield deleteModuleFeatureMapperService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteModuleFeatureMapper(response));
    } else {
      yield put(failedDeleteModuleFeatureMapper(response));
    }
  } catch (error) {
    yield put(failedDeleteModuleFeatureMapper(error));
  }
}
function* updateModuleFeatureMapperSaga(action) {
  try {
    const response = yield updateModuleFeatureMapperService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateModuleFeatureMapper(response));
    } else {
      yield put(failedUpdateModuleFeatureMapper(response));
    }
  } catch (error) {
    yield put(failedUpdateModuleFeatureMapper(error));
  }
}

export function* watcherCreateModuleFeatureMapperSaga() {
  yield takeLatest(
    requestCreateModuleFeatureMapper.type,
    createModuleFeatureMapperSaga,
  );
}
export function* watcherAllModuleFeatureMapperSaga() {
  yield takeLatest(
    requestAllModuleFeatureMapper.type,
    getAllModuleFeatureMapperSaga,
  );
}

export function* watcherDeleteModuleFeatureMapperSaga() {
  yield takeLatest(
    requestDeleteModuleFeatureMapper.type,
    deleteModuleFeatureMapperSaga,
  );
}
export function* watcherUpdateModuleFeatureMapperSaga() {
  yield takeLatest(
    requestUpdateModuleFeatureMapper.type,
    updateModuleFeatureMapperSaga,
  );
}
