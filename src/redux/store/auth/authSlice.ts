import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    isFetching: false,
    error: "",
  },
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    }
  },
});

export default authSlice.reducer;
export const {
  login,
  logout,
} = authSlice.actions;
