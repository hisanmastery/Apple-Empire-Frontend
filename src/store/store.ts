import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import fetchProductsSlice from "./api/products/productsSlice";
import fetchCartSlice from "./api/cart/cartSlice";

export const store = configureStore({
  reducer: {
    // Mount each reducer with a unique reducerPath
    [fetchProductsSlice.reducerPath]: fetchProductsSlice.reducer,
    [fetchCartSlice.reducerPath]: fetchCartSlice.reducer,
    ...reducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(fetchProductsSlice.middleware)
      .concat(fetchCartSlice.middleware),
});
