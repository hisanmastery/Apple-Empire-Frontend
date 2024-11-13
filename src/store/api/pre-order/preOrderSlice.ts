import { baseApiUrl } from "@/constants/endpoint";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fetchPreOrderSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseApiUrl}`,
  }),
  tagTypes: ["pre-order"],
  reducerPath: "pre-order",
  endpoints: (builder) => ({}),
});
export default fetchPreOrderSlice;
