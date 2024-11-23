import { baseApiUrl } from "@/constants/endpoint";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fetchAdsSectionsSlice = createApi({
  reducerPath: "ads-section",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseApiUrl}`,
  }),
  tagTypes: ["ads-section"],
  endpoints: () => ({}),
});
export default fetchAdsSectionsSlice;
