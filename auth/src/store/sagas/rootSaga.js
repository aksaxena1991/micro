import { all, fork } from "redux-saga/effects";
import {
  watcherGetAuthDetailsSaga,
  watcherLoginSaga,
  watcherRegisterEmployeeSaga,
  watcherVerifyOTPSaga,
} from "./auth-saga";
import {
    watcherAllRoleSaga,
    watcherCreateRoleSaga,
    watcherDeleteRoleSaga,
    watcherUpdateRoleSaga,
  } from "./role-saga";
import { watcherCurrentCompanySaga, watcherGetCompanyByIDSaga, watcherRegistrationSaga, watcherUpdateCompanySaga } from "./company-saga";
export default function* rootSaga() {
  yield all([
    fork(watcherLoginSaga),
    
    fork(watcherVerifyOTPSaga),
    
    fork(watcherRegistrationSaga),
    fork(watcherAllRoleSaga),
    fork(watcherCreateRoleSaga),
    fork(watcherDeleteRoleSaga),
    fork(watcherUpdateRoleSaga),
    
    fork(watcherRegisterEmployeeSaga),
    fork(watcherUpdateCompanySaga),
    
    fork(watcherGetAuthDetailsSaga),
    
    fork(watcherCurrentCompanySaga),
    fork(watcherGetCompanyByIDSaga),
    
  ]);
}
