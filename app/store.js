import { configureStore } from "@reduxjs/toolkit";
// import { CartReducer } from "../context/Reducers";
import cartReducer from "../features/counter/cartSlice";
import productReducer from "../features/counter/productsSlice";
import carouselProductReducer from "../features/counter/carouselSlice";
import userReducer from "../features/counter/UserSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    carouselProducts: carouselProductReducer,
    user: userReducer
  },
});
