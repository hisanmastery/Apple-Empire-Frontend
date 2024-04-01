import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import baseApi from "./api/baseApi";
export const store = configureStore({
  reducer: {
    // all reducer
    [baseApi.reducerPath]: baseApi.reducer,
    ...reducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
