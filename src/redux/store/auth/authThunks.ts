import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../api";

const login = createAsyncThunk(
  "auth/login", // отображается в dev tools и должно быть уникально у каждого Thunk
  async () => {
    const response = await API.get("/login");
    return response.data;
  },
);

export { login };
