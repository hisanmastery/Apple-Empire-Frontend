import { baseApiUrl } from "@/constants/endpoint";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fetchProductsSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseApiUrl}/blog`,
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({}),
});
export default fetchProductsSlice;
