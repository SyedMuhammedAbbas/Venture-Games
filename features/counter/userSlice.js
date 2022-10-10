import { createSlice } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";

const initialState = {
  userDetails: {},
  token: true
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Login(state, action) { 
        console.log("In Here");
        state.userDetails = action.payload;
        state.token = true;
    },
    SignOut(state) {
      console.log("here")
      Object.assign(state, initialState)
    }
  },
});

// Action creators are generated for each case reducer function
export const {Login, SignOut } = userSlice.actions;

export default userSlice.reducer;