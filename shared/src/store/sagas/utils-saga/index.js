import { put, takeLatest } from "redux-saga/effects";
import { allCityStatePincodeCountryService } from "../../../services/utils";
import { failedAllCityStatePincodeCountry, requestAllCityStatePincodeCountry, responseAllCityStatePincodeCountry } from "../../slices/UtilsSlice";


function* allCityStatePincodeCountrySaga() {
  try {
    const response = yield allCityStatePincodeCountryService();
    if (response?.records?.length) {
      const data = response.records?.map((el) => {
        return {
          ...el.fields
        }
      })

      yield put(responseAllCityStatePincodeCountry(data));
    } else {
      yield put(failedAllCityStatePincodeCountry(response));
    }
  } catch (error) {
    yield put(failedAllCityStatePincodeCountry(error));
  }
}
export function* watcherAllCityStatePincodeCountrySaga() {
  yield takeLatest(requestAllCityStatePincodeCountry.type, allCityStatePincodeCountrySaga);
}

