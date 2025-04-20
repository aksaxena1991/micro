import { put, takeLatest } from "redux-saga/effects";
import {
  createPlanService,
  deletePlanService,
  getAllPlanService,
  getPlanByIdService,
  updatePlanService,
} from "../../../services/plan";
import {
  failedAllPlan,
  failedCreatePlan,
  failedCurrentPlan,
  failedDeletePlan,
  failedUpdatePlan,
  requestAllPlan,
  requestCreatePlan,
  requestCurrentPlan,
  requestDeletePlan,
  requestUpdatePlan,
  responseAllPlan,
  responseCreatePlan,
  responseCurrentPlan,
  responseDeletePlan,
  responseUpdatePlan,
} from "../../slices/PlanSlice";

function* getAllPlanSaga(action) {
  try {
    const response = yield getAllPlanService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllPlan(response?.data));
    } else {
      yield put(failedAllPlan(response));
    }
  } catch (error) {
    yield put(failedAllPlan(error));
  }
}

function* createPlanSaga(action) {
  try {
    const response = yield createPlanService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreatePlan());
    } else {
      yield put(failedCreatePlan(response));
    }
  } catch (error) {
    yield put(failedCreatePlan(error));
  }
}

function* getPlanByIdSaga(action) {
  try {
    const response = yield getPlanByIdService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCurrentPlan(response?.data));
    } else {
      yield put(failedCurrentPlan(response));
    }
  } catch (error) {
    yield put(failedCurrentPlan(error));
  }
}

function* deletePlanSaga(action) {
  try {
    const response = yield deletePlanService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeletePlan(response));
    } else {
      yield put(failedDeletePlan(response));
    }
  } catch (error) {
    yield put(failedDeletePlan(error));
  }
}
function* updatePlanSaga(action) {
  try {
    const response = yield updatePlanService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdatePlan(response));
    } else {
      yield put(failedUpdatePlan(response));
    }
  } catch (error) {
    yield put(failedUpdatePlan(error));
  }
}

export function* watcherCreatePlanSaga() {
  yield takeLatest(
    requestCreatePlan.type,
    createPlanSaga,
  );
}
export function* watcherAllPlanSaga() {
  yield takeLatest(requestAllPlan.type, getAllPlanSaga);
}

export function* watcherDeletePlanSaga() {
  yield takeLatest(
    requestDeletePlan.type,
    deletePlanSaga,
  );
}
export function* watcherUpdatePlanSaga() {
  yield takeLatest(
    requestUpdatePlan.type,
    updatePlanSaga,
  );
}
export function* watcherGetPlanByIdSaga() {
  yield takeLatest(
    requestCurrentPlan.type,
    getPlanByIdSaga,
  );
}
