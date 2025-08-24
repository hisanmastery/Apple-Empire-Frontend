import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const todoBaseApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000/api`,
  }),
  tagTypes: ["Todo", "User"],
  endpoints: () => ({}),
});

export default todoBaseApi;