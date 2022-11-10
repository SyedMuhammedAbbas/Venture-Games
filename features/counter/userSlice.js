import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: {},
  token: false
}

export const userSlice = createSlice({

  //abc
  name: "user",
  initialState,
  reducers: {
    Login(state, action) { 
        console.log(action.payload);
        state.userDetails = action.payload;
        state.token = true;
    },
    SignOut(state) {
      console.log("here")
      state.userDetails = {};
      state.token = false;
    }
  },
});

// Action creators are generated for each case reducer function
export const {Login, SignOut } = userSlice.actions;

export default userSlice.reducer;