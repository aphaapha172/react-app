import { configureStore, createAction } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "../views/auth/login/services/userSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

export const resetStore = createAction("resetStore");

const rootReducer = combineReducers({
  user: userReducer,
});
const appReducer: typeof rootReducer = (state, action) => {
  if (action.type === resetStore.type) {
    return rootReducer(undefined, action);
  }
  return rootReducer(state, action);
};
const persistConfig = {
  key: "root",
  version: 1,
  whitelist: ["user"],
  storage,
};
const persistedReducer = persistReducer(persistConfig, appReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
