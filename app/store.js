import { configureStore } from "@reduxjs/toolkit";
// import { CartReducer } from "../context/Reducers";
import cartReducer from "../features/counter/cartSlice";
import productReducer from "../features/counter/productsSlice";

export const store = configureStore({
  reducer: { cart: cartReducer, products: productReducer },
});
