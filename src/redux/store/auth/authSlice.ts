import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authThunks";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    isFetching: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.isFetching = false;
        state.isAuth = true;
        state.error = "";
      })
      .addCase(login.rejected, (state) => {
        state.isFetching = false;
        state.error = "Something went wrong; please review your server connection!";
      });
  },
});

export default authSlice.reducer;
