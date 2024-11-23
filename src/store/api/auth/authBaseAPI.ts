import { baseApiUrl } from "@/constants/endpoint";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authBaseApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseApiUrl}/auth`,
  }),
  tagTypes: ["user"],
  endpoints: () => ({}),
});
export default authBaseApi;
