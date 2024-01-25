import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { PersistConfig } from "redux-persist/es/types";
import { encryptTransform } from "redux-persist-transform-encrypt";

// Reducers
import authReducer from "./slices/auth.slice";
import vehiclesReducer from "./slices/vehicles.slice";

const appReducer = combineReducers({
  auth: authReducer,
  vehicles: vehiclesReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

const encryptor = encryptTransform({
  secretKey: "Super-Secret-key-jrtec",
  onError: function (error: any) {
    // Handle the error.
  },
});

const persistConfig: PersistConfig<any> = {
  key: "root",
  storage: storage,
  transforms: [encryptor],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Usa direttamente il tipo di middleware da redux-thunk
//const thunkMiddleware: ThunkMiddleware<any, any> = thunk;

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  //middleware: [thunkMiddleware],
});

const persistor = persistStore(store);

export { store, persistor };

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
