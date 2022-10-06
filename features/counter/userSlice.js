import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: {},
    token: null,
  },
  reducers: {
    Login(state, action) { 
        console.log("In Here");
        state.userDetails = action.payload;
        state.token = action.payload.token;
    }
  },
});

// Action creators are generated for each case reducer function
export const {Login } = userSlice.actions;

export default userSlice.reducer;