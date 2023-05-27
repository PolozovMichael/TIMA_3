import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import skillsSlice from "./auth/authSlice";
import educationsSlices from "./auth/authSlice";

const rootReducer = combineReducers({
  skill: skillsSlice,
  education: educationsSlices,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

const persistor = persistStore(store);

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export {
  store,
  persistor,
}
export type {
  RootState,
  AppDispatch,
}
