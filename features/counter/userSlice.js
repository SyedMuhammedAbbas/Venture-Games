import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  userDetails: {},
  token: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Login(state, action) {
      state.userDetails = action.payload;
      state.token = true;
      toast.success("Login Successfull", {
        className: "toast-message",
      });
    },
    SignOut(state) {
      state.userDetails = {};
      state.token = false;
      toast.success("Signout Successfull", {
        className: "toast-message",
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { Login, SignOut } = userSlice.actions;

export default userSlice.reducer;
