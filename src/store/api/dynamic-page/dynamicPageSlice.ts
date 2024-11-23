import { baseApiUrl } from "@/constants/endpoint";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fetchDynamicPageSlice = createApi({
  reducerPath: "dynamic-page",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseApiUrl}/dynamic-page`,
  }),
  tagTypes: ["dynamic-page"],
  endpoints: () => ({}),
});
export default fetchDynamicPageSlice;
