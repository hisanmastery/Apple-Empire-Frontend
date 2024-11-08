import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import fetchProductsSlice from "./api/products/productsSlice";
import fetchCartSlice from "./api/cart/cartSlice";
import fetchCheckoutSlice from "./api/checkout/checkoutSlice";
import authBaseApi from "./api/auth/authBaseAPI";
import fetchEmiSlice from "./api/emi/emiSlice";
import fetchPreOrderSlice from "./api/pre-order/preOrderSlice";
import fetchBrandsSlice from "./api/brand/brandsSlice";
import fetchShippingSlice from "./api/shipping-methods/ShippingMethodsSlice";

export const store = configureStore({
  reducer: {
    // Mount each reducer with a unique reducerPath
    [fetchProductsSlice.reducerPath]: fetchProductsSlice.reducer,
    [fetchCartSlice.reducerPath]: fetchCartSlice.reducer,
    [fetchCheckoutSlice.reducerPath]: fetchCheckoutSlice.reducer,
    [fetchEmiSlice.reducerPath]: fetchEmiSlice.reducer,
    [fetchPreOrderSlice.reducerPath]: fetchPreOrderSlice.reducer,
    [authBaseApi.reducerPath]: authBaseApi.reducer,
    [fetchBrandsSlice.reducerPath]: fetchBrandsSlice.reducer,
    [fetchShippingSlice.reducerPath]: fetchShippingSlice.reducer,
    ...reducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(fetchProductsSlice.middleware)
      .concat(fetchCartSlice.middleware)
      .concat(fetchCheckoutSlice.middleware)
      .concat(fetchEmiSlice.middleware)
      .concat(authBaseApi.middleware)
      .concat(fetchPreOrderSlice.middleware)
      .concat(fetchBrandsSlice.middleware)
      .concat(fetchShippingSlice.middleware),
});
