import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import fetchProductsSlice from "./api/products/productsSlice";

export const store = configureStore({
  reducer: {
    // all reducer
    [fetchProductsSlice.reducerPath]: fetchProductsSlice.reducer,
    ...reducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchProductsSlice.middleware),
});
