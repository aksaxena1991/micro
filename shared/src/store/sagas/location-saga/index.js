import { put, takeLatest } from "redux-saga/effects";
import { failedAllLocationViaPincode, requestAllLocationViaPincode,  resetLocation,  responseAllLocationViaPincode } from "../../slices/LocationSlice";
import { getAllLocationViaPincodeService } from "../../../services/location";
function* getAllLocationViaPincodeSaga(action) {
  try {
    yield put(resetLocation());
    const response = yield getAllLocationViaPincodeService({
      key:"pincode",
      value: action?.payload
    });
    const { code } = response;
    if (code === 200) {
      yield put(responseAllLocationViaPincode(response?.data));
    } else {
      yield put(failedAllLocationViaPincode(response?.message));
    }
  } catch (error) {
    yield put(failedAllLocationViaPincode(error));
  }
}




export function* watcherAllLocationViaPincodeSaga() {
  yield takeLatest(requestAllLocationViaPincode.type, getAllLocationViaPincodeSaga);
}

