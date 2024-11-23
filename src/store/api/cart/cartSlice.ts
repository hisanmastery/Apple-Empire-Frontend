import { baseApiUrl } from "@/constants/endpoint";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fetchCartSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseApiUrl}/cart`,
  }),
  tagTypes: ["carts"],
  reducerPath: "carts",
  endpoints: () => ({}),
});
export default fetchCartSlice;
