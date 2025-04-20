import { put, takeLatest } from "redux-saga/effects";
import {
  createPurchaseService,
  deletePurchaseService,
  getAllPurchaseService,
  getPurchaseByIdService,
  updatePurchaseService,
} from "../../../services/purchase";
import {
  failedAllPurchase,
  failedCreatePurchase,
  failedCurrentPurchase,
  failedDeletePurchase,
  failedUpdatePurchase,
  requestAllPurchase,
  requestCreatePurchase,
  requestCurrentPurchase,
  requestDeletePurchase,
  requestUpdatePurchase,
  responseAllPurchase,
  responseCreatePurchase,
  responseCurrentPurchase,
  responseDeletePurchase,
  responseUpdatePurchase,
} from "../../slices/PurchaseSlice";

function* getAllPurchaseSaga(action) {
  try {
    const response = yield getAllPurchaseService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllPurchase(response?.data));
    } else {
      yield put(failedAllPurchase(response));
    }
  } catch (error) {
    yield put(failedAllPurchase(error));
  }
}

function* createPurchaseSaga(action) {
  try {
    const response = yield createPurchaseService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreatePurchase());
    } else {
      yield put(failedCreatePurchase(response));
    }
  } catch (error) {
    yield put(failedCreatePurchase(error));
  }
}

function* getPurchaseByIdSaga(action) {
  try {
    const response = yield getPurchaseByIdService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCurrentPurchase(response?.data));
    } else {
      yield put(failedCurrentPurchase(response));
    }
  } catch (error) {
    yield put(failedCurrentPurchase(error));
  }
}

function* deletePurchaseSaga(action) {
  try {
    const response = yield deletePurchaseService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeletePurchase(response));
    } else {
      yield put(failedDeletePurchase(response));
    }
  } catch (error) {
    yield put(failedDeletePurchase(error));
  }
}
function* updatePurchaseSaga(action) {
  try {
    const response = yield updatePurchaseService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdatePurchase(response));
    } else {
      yield put(failedUpdatePurchase(response));
    }
  } catch (error) {
    yield put(failedUpdatePurchase(error));
  }
}

export function* watcherCreatePurchaseSaga() {
  yield takeLatest(
    requestCreatePurchase.type,
    createPurchaseSaga,
  );
}
export function* watcherAllPurchaseSaga() {
  yield takeLatest(requestAllPurchase.type, getAllPurchaseSaga);
}

export function* watcherDeletePurchaseSaga() {
  yield takeLatest(
    requestDeletePurchase.type,
    deletePurchaseSaga,
  );
}
export function* watcherUpdatePurchaseSaga() {
  yield takeLatest(
    requestUpdatePurchase.type,
    updatePurchaseSaga,
  );
}
export function* watcherGetPurchaseByIdSaga() {
  yield takeLatest(
    requestCurrentPurchase.type,
    getPurchaseByIdSaga,
  );
}
