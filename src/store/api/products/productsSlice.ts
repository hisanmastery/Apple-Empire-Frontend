import { baseApiUrl } from "@/constants/endpoint";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fetchProductsSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseApiUrl}/product`,
  }),
  tagTypes: ["products"],
  endpoints: () => ({}),
});
export default fetchProductsSlice;
