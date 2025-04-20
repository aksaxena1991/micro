import { put, takeLatest } from "redux-saga/effects";
import {
  createItemListService,
  deleteItemListService, getAllItemListService, updateItemListService
} from "../../../services/item-list";
import {
  failedAllItemListByEOCID,
  failedCreateItemList,
  failedDeleteItemList,
  failedUpdateItemList,
  requestAllItemListByEOCID,
  requestCreateItemList,
  requestDeleteItemList,
  requestUpdateItemList,
  responseAllItemListByEOCID,
  responseCreateItemList,
  responseDeleteItemList,
  responseUpdateItemList
} from "../../slices/ItemListSlice";

function* getAllItemListSaga(action) {
  try {

    const response = yield getAllItemListService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllItemListByEOCID(response?.data));
    } else {
      yield put(failedAllItemListByEOCID(response));
    }
  } catch (error) {
    yield put(failedAllItemListByEOCID(error));
  }
}

function* createItemListSaga(action) {
  try {
    const response = yield createItemListService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateItemList(response?.data));
    } else {
      yield put(failedCreateItemList(response));
    }
  } catch (error) {
    yield put(failedCreateItemList(error));
  }
}

function* deleteItemListSaga(action) {
  try {
    const response = yield deleteItemListService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteItemList(response?.data));
    } else {
      yield put(failedDeleteItemList(response));
    }
  } catch (error) {
    yield put(failedDeleteItemList(error));
  }
}
function* updateItemListSaga(action) {
  try {
    const response = yield updateItemListService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateItemList(response?.data));
    } else {
      yield put(failedUpdateItemList(response));
    }
  } catch (error) {
    yield put(failedUpdateItemList(error));
  }
}

export function* watcherCreateItemListSaga() {
  yield takeLatest(requestCreateItemList.type, createItemListSaga);
}
export function* watcherAllItemListSaga() {
  yield takeLatest(requestAllItemListByEOCID.type, getAllItemListSaga);
}

export function* watcherDeleteItemListSaga() {
  yield takeLatest(requestDeleteItemList.type, deleteItemListSaga);
}
export function* watcherUpdateItemListSaga() {
  yield takeLatest(requestUpdateItemList.type, updateItemListSaga);
}
