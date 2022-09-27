import { configureStore } from "@reduxjs/toolkit";
// import { CartReducer } from "../context/Reducers";
import cartReducer from "../features/counter/cartSlice";

export const store = configureStore({
  reducer: { cart: cartReducer },
});
