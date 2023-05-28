// store config
export {
  store,
  persistor,
} from "./store";

// types
export type {
  RootState,
  AppDispatch,
} from "./store";

// async thunks
export {
  login,
  logout,
} from "./store/auth/authSlice";
