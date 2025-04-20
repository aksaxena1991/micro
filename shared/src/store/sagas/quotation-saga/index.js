import { put, takeLatest } from "redux-saga/effects";
import { createQuotationService, getAllQuotationByEOCIDService } from "../../../services/quotation";
import { failedAllQuotationByEOCID, failedCreateQuotation, requestAllQuotationByEOCID, requestCreateQuotation, responseAllQuotationByEOCID, responseCreateQuotation } from "../../slices/QuotationSlice";



function* createQuotationSaga(action) {
  try {
    const response = yield createQuotationService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseCreateQuotation(response?.data));
    } else {
      yield put(failedCreateQuotation(response?.data));
    }
  } catch (error) {
    yield put(failedCreateQuotation(error));
  }
}
function* getAllQuotationByEOCIDSaga(action) {
  try {
    const response = yield getAllQuotationByEOCIDService(action.payload);
    const { code } = response;
    if (code === 200) {
      yield put(responseAllQuotationByEOCID(response?.data));
    } else {
      yield put(failedAllQuotationByEOCID(response?.data));
    }
  } catch (error) {
    yield put(failedAllQuotationByEOCID(error));
  }
}


export function* watcherGetAllQuotationByEOCIDSaga() {
  yield takeLatest(requestAllQuotationByEOCID.type, getAllQuotationByEOCIDSaga);
}
export function* watcherCreateQuotationSaga() {
  yield takeLatest(requestCreateQuotation.type, createQuotationSaga);
}
