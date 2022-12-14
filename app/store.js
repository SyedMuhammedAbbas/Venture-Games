import { configureStore } from "@reduxjs/toolkit";
// import { CartReducer } from "../context/Reducers";
import cartReducer from "../features/counter/cartSlice";
import productReducer from "../features/counter/productsSlice";
import carouselProductReducer from "../features/counter/carouselSlice";
import userReducer from "../features/counter/userSlice";
import storage from "redux-persist/lib/storage";
import accessoriesReducer from "../features/counter/accessoriesSlice";
import girftcardsReducer from "../features/counter/giftcardsSlice";
import flashSaleReducer from "../features/counter/flashSaleSlice";
import featuredReducer from "../features/counter/featuredSlice";
import gamesReducer from "../features/counter/gamesSlice";
import checkoutReducer from "../features/counter/checkoutSlice";
import consolesReducer from "../features/counter/consolesSlice";
import searchReducer from "../features/counter/searchSlice";

import { combineReducers } from "redux";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import merchandiseReducer from "../features/counter/merchandiseSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  cart: cartReducer,
  accessories: accessoriesReducer,
  giftcards: girftcardsReducer,
  products: productReducer,
  featured: featuredReducer,
  flashsale: flashSaleReducer,
  games: gamesReducer,
  carouselProducts: carouselProductReducer,
  user: userReducer,
  checkout: checkoutReducer,
  merchandise: merchandiseReducer,
  consoles: consolesReducer,
  search: searchReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
