import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import fetchProductsSlice from "./api/products/productsSlice";
import fetchCartSlice from "./api/cart/cartSlice";
import fetchCheckoutSlice from "./api/checkout/checkoutSlice";
import authBaseApi from "./api/auth/authBaseAPI";

export const store = configureStore({
  reducer: {
    // Mount each reducer with a unique reducerPath
    [fetchProductsSlice.reducerPath]: fetchProductsSlice.reducer,
    [fetchCartSlice.reducerPath]: fetchCartSlice.reducer,
    [fetchCheckoutSlice.reducerPath]: fetchCheckoutSlice.reducer,
    [authBaseApi.reducerPath]: authBaseApi.reducer,

    ...reducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(fetchProductsSlice.middleware)
      .concat(fetchCartSlice.middleware)
      .concat(fetchCheckoutSlice.middleware)
      .concat(authBaseApi.middleware),
});
