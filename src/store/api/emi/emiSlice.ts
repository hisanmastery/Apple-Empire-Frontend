import { baseApiUrl } from "@/constants/endpoint";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fetchEmiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseApiUrl}/emi`,
  }),
  tagTypes: ["emi"],
  reducerPath: "emi",
  endpoints: (builder) => ({}),
});
export default fetchEmiSlice;
