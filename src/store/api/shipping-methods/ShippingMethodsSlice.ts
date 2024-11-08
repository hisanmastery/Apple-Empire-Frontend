import { baseApiUrl } from "@/constants/endpoint";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fetchShippingSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseApiUrl}/shipping-methods`,
  }),
  tagTypes: ["shipping"],
  reducerPath: "shipping",
  endpoints: (builder) => ({}),
});
export default fetchShippingSlice;
