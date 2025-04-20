import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSagas";
import AuthSlice from "./slices/AuthSlice";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import AccountSlice from "./slices/AccountSlice";
import AssignTemplateSlice from "./slices/AssignTemplateSlice";
import BankSlice from "./slices/BankSlice";
import BrFrSlice from "./slices/BrFrSlice";
import CompanyContactsSlice from "./slices/CompanyContactsSlice";
import CompanyDocumentSlice from "./slices/CompanyDocumentsSlice";
import CompanySlice from "./slices/CompanySlice";
import DocumentFooterContentSlice from "./slices/DocumentFooterContentSlice";
import DriverSlice from "./slices/DriverSlice";
import EmployeeEnrollSlice from "./slices/EmployeeEnrollSlice";
import EnquirySlice from "./slices/EnquirySlice";
import FeatureSlice from "./slices/FeatureSlice";
import FloorSlice from "./slices/FloorSlice";
import FollowUpsSlice from "./slices/FollowUpsSlice";
import GenerateTemplateSlice from "./slices/GenerateTemplateSlice";
import GovtRegistrationSlice from "./slices/GovtRegistrationSlice";
import ItemListSlice from "./slices/ItemListSlice";
import LocationSlice from "./slices/LocationSlice";
import ModuleFeatureMapperSlice from "./slices/ModuleFeatureMapperSlice";
import ModuleSlice from "./slices/ModuleSlice";
import PackingMaterialSlice from "./slices/PackingMaterialSlice";
import PaymentModeSlice from "./slices/PaymentModeSlice";
import PaymentTypeSlice from "./slices/PaymentTypeSlice";
import PlanSlice from "./slices/PlanSlice";
import PurchaseSlice from "./slices/PurchaseSlice";
import QuotationSlice from "./slices/QuotationSlice";
import RoleSlice from "./slices/RoleSlice";
import SerialSettingSlice from "./slices/SerialSettingSlice";
import SetSurveySlice from "./slices/SetSurveySlice";
import ShiftingTypeSlice from "./slices/ShiftingTypeSlice";
import SignatureSlice from "./slices/SignatureSlice";
import TemplateSlice from "./slices/TemplateSlice";
import ThemeSlice from "./slices/ThemeSlice";
import UnitTypeSlice from "./slices/UnitTypeSlice";
import UtilsSlice from "./slices/UtilsSlice";
import VehicleAccessoriesSlice from "./slices/VehicleAccessoriesSlice";
import VehicleColorSlice from "./slices/VehicleColorSlice";
import VehicleCompanySlice from "./slices/VehicleCompanySlice";
import VehicleInsuranceCompanySlice from "./slices/VehicleInsuranceCompanySlice";
import VehicleLoadSizeSlice from "./slices/VehicleLoadSizeSlice";
import VehicleModelSlice from "./slices/VehicleModelSlice";
import VehicleSlice from "./slices/VehicleSlice";
import VehicleTypeSlice from "./slices/VehicleTypeSlice";
const sagaMiddleware = createSagaMiddleware();
const storeMiddleware = [sagaMiddleware];
const persistConfig = {
  key: "root",
  storage,
};
const appReducer = combineReducers({
  account: AccountSlice,
  assignTemplate: AssignTemplateSlice,
  auth: AuthSlice,
  bank: BankSlice,
  brFr: BrFrSlice,
  company: CompanySlice,
  companyContacts: CompanyContactsSlice,
  companyDocuments: CompanyDocumentSlice,
  documentFooterContent: DocumentFooterContentSlice,
  driver: DriverSlice,
  employeeEnroll: EmployeeEnrollSlice,
  enquiry: EnquirySlice,
  followUps: FollowUpsSlice,
  feature: FeatureSlice,
  floor: FloorSlice,
  generateTemplate: GenerateTemplateSlice,
  govtRegistration: GovtRegistrationSlice,
  itemList: ItemListSlice,
  location: LocationSlice,
  module: ModuleSlice,
  moduleFeatureMapper: ModuleFeatureMapperSlice,
  plan: PlanSlice,
  paymentMode: PaymentModeSlice,
  paymentType: PaymentTypeSlice,
  purchase: PurchaseSlice,
  packingMaterial: PackingMaterialSlice,
  quotation: QuotationSlice,
  role: RoleSlice,
  setSurvey: SetSurveySlice,
  shiftingType: ShiftingTypeSlice,
  serialSetting: SerialSettingSlice,
  signature: SignatureSlice,
  theme: ThemeSlice,
  template: TemplateSlice,
  utils: UtilsSlice,
  unitType: UnitTypeSlice,
  vehicleAccessories: VehicleAccessoriesSlice,
  vehicleColor: VehicleColorSlice,
  vehicleCompany: VehicleCompanySlice,
  vehicleInsuranceCompany: VehicleInsuranceCompanySlice,
  vehicleLoadSize: VehicleLoadSizeSlice,
  vehicleModel: VehicleModelSlice,
  vehicleType: VehicleTypeSlice,
  vehicle: VehicleSlice

});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const _store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(storeMiddleware);
  },
});
sagaMiddleware.run(rootSaga);
export const _persistorStore = persistStore(_store);
export default _store;
