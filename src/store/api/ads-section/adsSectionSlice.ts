import { baseApiUrl } from "@/constants/endpoint";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fetchAdsSectionsSlice = createApi({
  reducerPath: "ads-section",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseApiUrl}/ads-section`,
  }),
  tagTypes: ["ads-section"],
  endpoints: (builder) => ({}),
});
export default fetchAdsSectionsSlice;
