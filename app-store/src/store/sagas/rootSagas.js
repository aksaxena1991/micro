import { all, fork } from "redux-saga/effects";
import {
  watcherGetAuthDetailsSaga,
  watcherLoginSaga,
  watcherRegisterEmployeeSaga,
  watcherVerifyOTPSaga,
} from "./auth-saga";
import {
  watcherAllBankSaga, watcherCreateBankSaga, watcherDeleteBankSaga,
  watcherUpdateBankSaga
} from "./bank-saga";
import {
  watcherAllBrFrByCompanyIdSaga,
  watcherCreateBrFrSaga,
  watcherDeleteBrFrSaga,
  watcherUpdateBrFrSaga,
} from "./brfr-saga";

import { watcherCreateAccountSaga, watcherDeleteAccountSaga, watcherGetAllAccountsByCompanyIDSaga, watcherUpdateAccountSaga } from "./account-saga";
import { watcherCreateAssignTemplateSaga, watcherDeleteAssignTemplateSaga, watcherGetAllAssignTemplateByBrFrIdOrCompanyIdSaga, watcherUpdateAssignTemplateSaga } from "./assign-template-saga";
import {
  watcherAllCompanyContactByCompanyIdSaga,
  watcherCreateCompanyContactSaga,
  watcherDeleteCompanyContactSaga,
  watcherUpdateCompanyContactSaga,
} from "./company-contacts-saga";
import { watcherAllCompanyDocumentByCompanyIdSaga, watcherCreateCompanyDocumentSaga, watcherDeleteCompanyDocumentSaga, watcherUpdateCompanyDocumentSaga } from "./company-documents-saga";
import { watcherCurrentCompanySaga, watcherGetCompanyByIDSaga, watcherRegistrationSaga, watcherUpdateCompanySaga } from "./company-saga";
import {
  watcherAllDocumentFooterContentByCompanyIdSaga,
  watcherCreateDocumentFooterContentSaga,
  watcherDeleteDocumentFooterContentSaga, watcherUpdateDocumentFooterContentSaga
} from "./document-footer-content-saga";
import { watcherAllDriverByCompanyIdSaga, watcherCreateDriverSaga, watcherDeleteDriverSaga, watcherUpdateDriverSaga } from "./driver-saga";
import {
  watcherAllEmployeeEnrollSaga,
  watcherCreateEmployeeEnrollSaga,
  watcherDeleteEmployeeEnrollSaga,
  watcherUpdateEmployeeEnrollSaga,
} from "./employee-enroll-saga";
import {
  watcherCreateEnquirySaga,
  watcherDeleteEnquirySaga,
  watcherGetEnquiryByBrFrIDOrCompanyIDSaga,
  watcherSelectedEnquirySaga,
  watcherUpdateEnquirySaga
} from "./enquiry-saga";
import {
  watcherAllFeatureSaga,
  watcherCreateFeatureSaga,
  watcherDeleteFeatureSaga,
  watcherUpdateFeatureSaga,
} from "./feature-saga";
import {
  watcherAllFloorSaga,
  watcherCreateFloorSaga,
  watcherDeleteFloorSaga,
  watcherUpdateFloorSaga
} from "./floor-saga";
import { watcherAllFollowUpsByEOCIDSaga, watcherCreateFollowUpSaga } from "./follow-ups-saga";
import {
  watcherCreateGovtRegistrationSaga,
  watcherDeleteGovtRegistrationSaga,
  watcherGetAllGovtRegistrationByCompanyIdOrBrFrIdSaga,
  watcherUpdateGovtRegistrationSaga
} from "./govt-registration-saga";
import { watcherAllItemListSaga, watcherCreateItemListSaga } from "./item-list-saga";
import { watcherAllLocationViaPincodeSaga } from "./location-saga";
import {
  watcherAllModuleFeatureMapperSaga,
  watcherCreateModuleFeatureMapperSaga,
  watcherDeleteModuleFeatureMapperSaga,
  watcherUpdateModuleFeatureMapperSaga,
} from "./module-feature-mapper-saga";
import {
  watcherAllModuleSaga,
  watcherAllSubModuleSaga,
  watcherCreateModuleSaga,
  watcherDeleteModuleSaga,
  watcherUpdateModuleSaga,
} from "./module-saga";
import { watcherAllPackingMaterialByEOCIDSaga, watcherCreatePackingMaterialSaga } from "./packing-material-saga";
import {
  watcherAllPaymentModeSaga, watcherCreatePaymentModeSaga, watcherDeletePaymentModeSaga, watcherUpdatePaymentModeSaga
} from "./payment-mode-saga";
import {
  watcherAllPaymentTypeSaga,
  watcherCreatePaymentTypeSaga, watcherDeletePaymentTypeSaga, watcherUpdatePaymentTypeSaga
} from "./payment-type-saga";
import { watcherAllPlanSaga, watcherCreatePlanSaga, watcherDeletePlanSaga, watcherGetPlanByIdSaga, watcherUpdatePlanSaga } from "./plan-saga";
import {
  watcherAllPurchaseSaga,
  watcherCreatePurchaseSaga, watcherDeletePurchaseSaga,
  watcherGetPurchaseByIdSaga, watcherUpdatePurchaseSaga
} from "./purchase-saga";
import { watcherCreateQuotationSaga, watcherGetAllQuotationByEOCIDSaga } from "./quotation-saga";
import {
  watcherAllRoleSaga,
  watcherCreateRoleSaga,
  watcherDeleteRoleSaga,
  watcherUpdateRoleSaga,
} from "./role-saga";
import {
  watcherAllSerialSettingByCompanyIdSaga,
  watcherCreateSerialSettingSaga,
  watcherDeleteSerialSettingSaga,
  watcherGetSerialSettingByCompanyIdBrFrIdModuleNameSaga,
  watcherUpdateSerialSettingSaga
} from "./serial-setting-saga";
import { watcherAllSetSurveyByEOCIDSaga, watcherCreateSetSurveySaga } from "./set-survey-saga";
import {
  watcherAllShiftingTypeSaga, watcherCreateShiftingTypeSaga, watcherDeleteShiftingTypeSaga,
  watcherUpdateShiftingTypeSaga
} from "./shifting-type-saga";
import { watcherCreateSignatureSaga, watcherDeleteSignatureSaga, watcherGetAllSignatureByBrFrIDOrCompanyIDSaga, watcherUpdateSignatureSaga } from "./signature-saga";
import { watcherCreateTemplateSaga, watcherDeleteTemplateSaga, watcherGetAllTemplateSaga, watcherUpdateTemplateSaga } from "./template-saga";
import {
  watcherAllUnitTypeSaga,
  watcherCreateUnitTypeSaga,
  watcherDeleteUnitTypeSaga, watcherUpdateUnitTypeSaga
} from "./unit-type-saga";
import { watcherAllCityStatePincodeCountrySaga } from "./utils-saga";
import {
  watcherAllVehicleAccessoriesSaga,
  watcherCreateVehicleAccessoriesSaga,
  watcherDeleteVehicleAccessoriesSaga,
  watcherUpdateVehicleAccessoriesSaga
} from "./vehicle-accessories-saga";
import {
  watcherAllVehicleColorSaga,
  watcherCreateVehicleColorSaga,
  watcherDeleteVehicleColorSaga,
  watcherUpdateVehicleColorSaga
} from "./vehicle-color-saga";
import {
  watcherAllVehicleCompanySaga,
  watcherCreateVehicleCompanySaga,
  watcherDeleteVehicleCompanySaga,
  watcherUpdateVehicleCompanySaga
} from "./vehicle-company-saga";
import {
  watcherAllVehicleInsuranceCompanySaga,
  watcherCreateVehicleInsuranceCompanySaga,
  watcherDeleteVehicleInsuranceCompanySaga,
  watcherUpdateVehicleInsuranceCompanySaga
} from "./vehicle-insurance-company-saga";
import {
  watcherAllVehicleLoadSizeSaga,
  watcherCreateVehicleLoadSizeSaga,
  watcherDeleteVehicleLoadSizeSaga,
  watcherUpdateVehicleLoadSizeSaga
} from "./vehicle-load-size-saga";
import {
  watcherAllVehicleModelSaga,
  watcherCreateVehicleModelSaga,
  watcherDeleteVehicleModelSaga,
  watcherUpdateVehicleModelSaga
} from "./vehicle-model-saga";
import { watcherAllVehicleByCompanyIdSaga, watcherCreateVehicleSaga, watcherDeleteVehicleSaga, watcherUpdateVehicleSaga } from "./vehicle-saga";
import {
  watcherAllVehicleTypeSaga,
  watcherCreateVehicleTypeSaga,
  watcherDeleteVehicleTypeSaga,
  watcherUpdateVehicleTypeSaga
} from "./vehicle-type-saga";
import { watcherGenerateTemplateSaga } from "./generate-template-saga";
export default function* rootSaga() {
  yield all([
    fork(watcherGetSerialSettingByCompanyIdBrFrIdModuleNameSaga),
    fork(watcherAllItemListSaga),
    fork(watcherCreateItemListSaga),
    fork(watcherCreatePackingMaterialSaga),
    fork(watcherAllPackingMaterialByEOCIDSaga),
    fork(watcherCreateSetSurveySaga),
    fork(watcherAllSetSurveyByEOCIDSaga),
    fork(watcherAllFollowUpsByEOCIDSaga),
    fork(watcherCreateFollowUpSaga),
    fork(watcherDeleteAccountSaga),
    fork(watcherUpdateAccountSaga),
    fork(watcherGetAllAccountsByCompanyIDSaga),
    fork(watcherCreateAccountSaga),
    fork(watcherGetAllQuotationByEOCIDSaga),
    fork(watcherCreateSerialSettingSaga),
    fork(watcherCreateQuotationSaga),
    fork(watcherUpdateSerialSettingSaga),
    fork(watcherAllPurchaseSaga),
    fork(watcherCreatePurchaseSaga),
    fork(watcherDeletePurchaseSaga),
    fork(watcherGetPurchaseByIdSaga),
    fork(watcherUpdatePurchaseSaga),
    fork(watcherAllVehicleModelSaga),
    fork(watcherCreateVehicleModelSaga),
    fork(watcherDeleteVehicleModelSaga),
    fork(watcherUpdateVehicleModelSaga),
    fork(watcherAllVehicleTypeSaga),

    fork(watcherCreateVehicleTypeSaga),
    fork(watcherDeleteVehicleTypeSaga),
    fork(watcherUpdateVehicleTypeSaga),
    fork(watcherAllVehicleLoadSizeSaga),
    fork(watcherCreateVehicleLoadSizeSaga),
    fork(watcherDeleteVehicleLoadSizeSaga),
    fork(watcherUpdateVehicleLoadSizeSaga),
    fork(watcherAllVehicleInsuranceCompanySaga),
    fork(watcherCreateVehicleInsuranceCompanySaga),
    fork(watcherDeleteVehicleInsuranceCompanySaga),
    fork(watcherUpdateVehicleInsuranceCompanySaga),
    fork(watcherAllVehicleCompanySaga),
    fork(watcherCreateVehicleCompanySaga),
    fork(watcherDeleteVehicleCompanySaga),
    fork(watcherUpdateVehicleCompanySaga),
    fork(watcherAllVehicleColorSaga),
    fork(watcherCreateVehicleColorSaga),
    fork(watcherDeleteVehicleColorSaga),
    fork(watcherUpdateVehicleColorSaga),
    fork(watcherAllVehicleAccessoriesSaga),
    fork(watcherCreateVehicleAccessoriesSaga),
    fork(watcherDeleteVehicleAccessoriesSaga),
    fork(watcherUpdateVehicleAccessoriesSaga),
    fork(watcherAllDocumentFooterContentByCompanyIdSaga),
    fork(watcherCreateDocumentFooterContentSaga),
    fork(watcherDeleteDocumentFooterContentSaga),
    fork(watcherUpdateDocumentFooterContentSaga),
    fork(watcherDeleteEnquirySaga),
    fork(watcherUpdateEnquirySaga),
    fork(watcherGetEnquiryByBrFrIDOrCompanyIDSaga),
    fork(watcherCreateEnquirySaga),
    fork(watcherAllFloorSaga),
    fork(watcherCreateFloorSaga),
    fork(watcherDeleteFloorSaga),
    fork(watcherUpdateFloorSaga),
    fork(watcherDeleteShiftingTypeSaga),
    fork(watcherCreateShiftingTypeSaga),
    fork(watcherUpdateShiftingTypeSaga),
    fork(watcherAllShiftingTypeSaga),
    fork(watcherUpdateUnitTypeSaga),
    fork(watcherAllUnitTypeSaga),
    fork(watcherCreateUnitTypeSaga),
    fork(watcherDeleteUnitTypeSaga),
    fork(watcherAllPaymentTypeSaga),
    fork(watcherCreatePaymentTypeSaga),
    fork(watcherDeletePaymentTypeSaga),
    fork(watcherUpdatePaymentTypeSaga),
    fork(watcherAllPaymentModeSaga),
    fork(watcherCreatePaymentModeSaga),
    fork(watcherDeletePaymentModeSaga),
    fork(watcherUpdatePaymentModeSaga),
    fork(watcherLoginSaga),
    fork(watcherAllBankSaga),
    fork(watcherCreateBankSaga),
    fork(watcherDeleteBankSaga),
    fork(watcherVerifyOTPSaga),
    fork(watcherUpdateBankSaga),
    fork(watcherRegistrationSaga),
    fork(watcherAllRoleSaga),
    fork(watcherCreateRoleSaga),
    fork(watcherDeleteRoleSaga),
    fork(watcherUpdateRoleSaga),
    fork(watcherAllModuleSaga),
    fork(watcherCreateModuleSaga),
    fork(watcherDeleteModuleSaga),
    fork(watcherUpdateModuleSaga),
    fork(watcherAllSubModuleSaga),
    fork(watcherAllFeatureSaga),
    fork(watcherCreateFeatureSaga),
    fork(watcherDeleteFeatureSaga),
    fork(watcherUpdateFeatureSaga),
    fork(watcherAllModuleFeatureMapperSaga),
    fork(watcherCreateModuleFeatureMapperSaga),
    fork(watcherDeleteModuleFeatureMapperSaga),
    fork(watcherUpdateModuleFeatureMapperSaga),
    fork(watcherAllBrFrByCompanyIdSaga),
    fork(watcherCreateBrFrSaga),
    fork(watcherDeleteBrFrSaga),
    fork(watcherUpdateBrFrSaga),

    fork(watcherCreateGovtRegistrationSaga),
    fork(watcherDeleteGovtRegistrationSaga),
    fork(watcherUpdateGovtRegistrationSaga),

    fork(watcherAllEmployeeEnrollSaga),
    fork(watcherCreateEmployeeEnrollSaga),
    fork(watcherDeleteEmployeeEnrollSaga),
    fork(watcherUpdateEmployeeEnrollSaga),
    fork(watcherRegisterEmployeeSaga),
    fork(watcherUpdateCompanySaga),
    fork(watcherCreatePlanSaga),
    fork(watcherDeletePlanSaga),
    fork(watcherUpdatePlanSaga),
    fork(watcherAllPlanSaga),
    fork(watcherGetAuthDetailsSaga),
    fork(watcherGetPlanByIdSaga),
    fork(watcherCurrentCompanySaga),
    fork(watcherGetCompanyByIDSaga),
    fork(watcherAllSerialSettingByCompanyIdSaga),
    fork(watcherDeleteSerialSettingSaga),
    fork(watcherAllCompanyContactByCompanyIdSaga),
    fork(watcherCreateCompanyContactSaga),
    fork(watcherDeleteCompanyContactSaga),
    fork(watcherUpdateCompanyContactSaga),
    fork(watcherGetAllGovtRegistrationByCompanyIdOrBrFrIdSaga),
    fork(watcherSelectedEnquirySaga),
    fork(watcherCreateSignatureSaga),
    fork(watcherDeleteSignatureSaga),
    fork(watcherUpdateSignatureSaga),
    fork(watcherGetAllSignatureByBrFrIDOrCompanyIDSaga),
    fork(watcherCreateDriverSaga),
    fork(watcherAllDriverByCompanyIdSaga),
    fork(watcherDeleteDriverSaga),
    fork(watcherUpdateDriverSaga),
    fork(watcherCreateVehicleSaga),
    fork(watcherAllVehicleByCompanyIdSaga),
    fork(watcherDeleteVehicleSaga),
    fork(watcherUpdateVehicleSaga),
    fork(watcherCreateCompanyDocumentSaga),
    fork(watcherAllCompanyDocumentByCompanyIdSaga),
    fork(watcherDeleteCompanyDocumentSaga),
    fork(watcherUpdateCompanyDocumentSaga),
    fork(watcherDeleteTemplateSaga),
    fork(watcherUpdateTemplateSaga),
    fork(watcherGetAllTemplateSaga),
    fork(watcherCreateTemplateSaga),
    fork(watcherCreateAssignTemplateSaga),
    fork(watcherGetAllAssignTemplateByBrFrIdOrCompanyIdSaga),
    fork(watcherDeleteAssignTemplateSaga),
    fork(watcherUpdateAssignTemplateSaga),
    fork(watcherAllCityStatePincodeCountrySaga),
    fork(watcherAllLocationViaPincodeSaga),
    fork(watcherGenerateTemplateSaga)
  ]);
}
