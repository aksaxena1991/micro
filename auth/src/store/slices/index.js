import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import AuthSlice from "./authSlice";
import CompanySlice from "./companySlice";
import RoleSlice from "./roleSlice";
import rootSaga from "./sagas/rootSagas";


const sagaMiddleware = createSagaMiddleware();
const storeMiddleware = [sagaMiddleware];
const persistConfig = {
    key: "root",
    storage,
};
const appReducer = combineReducers({
    auth: AuthSlice,
    company: CompanySlice,
    role: RoleSlice,
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
