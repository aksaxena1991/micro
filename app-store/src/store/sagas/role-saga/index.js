

import { put, takeLatest } from "redux-saga/effects";
import {
  createRoleService,
  deleteRoleService,
  getAllRoleService,
  updateRoleService,
} from "../../../services/role";
import {
  failedAllRole,
  failedCreateRole,
  failedDeleteRole,
  failedUpdateRole,
  requestAllRole,
  requestCreateRole,
  requestDeleteRole,
  requestUpdateRole,
  responseAllRole,
  responseCreateRole,
  responseDeleteRole,
  responseUpdateRole,
} from "../../slices/RoleSlice";

function* getAllRoleSaga(action) {
  try {
    const response = yield getAllRoleService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllRole(response?.data));
    } else {
      yield put(failedAllRole(response));
    }
  } catch (error) {
    yield put(failedAllRole(error));
  }
}

function* createRoleSaga(action) {
  try {
    const response = yield createRoleService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateRole());
    } else {
      yield put(failedCreateRole(response));
    }
  } catch (error) {
    yield put(failedCreateRole(error));
  }
}

function* deleteRoleSaga(action) {
  try {
    const response = yield deleteRoleService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseDeleteRole(response));
    } else {
      yield put(failedDeleteRole(response));
    }
  } catch (error) {
    yield put(failedDeleteRole(error));
  }
}
function* updateRoleSaga(action) {
  try {
    const response = yield updateRoleService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseUpdateRole(response));
    } else {
      yield put(failedUpdateRole(response));
    }
  } catch (error) {
    yield put(failedUpdateRole(error));
  }
}

export function* watcherCreateRoleSaga() {
  yield takeLatest(requestCreateRole.type, createRoleSaga);
}
export function* watcherAllRoleSaga() {
  yield takeLatest(requestAllRole.type, getAllRoleSaga);
}

export function* watcherDeleteRoleSaga() {
  yield takeLatest(requestDeleteRole.type, deleteRoleSaga);
}
export function* watcherUpdateRoleSaga() {
  yield takeLatest(requestUpdateRole.type, updateRoleSaga);
}
