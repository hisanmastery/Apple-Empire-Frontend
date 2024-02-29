import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    // find all blog
    GetBlogs: builder.query({
      query: () => "/blog",
    }),

    // get single Blog
    getSingleBlog: builder.query({
      query: (id) => `/blog/${id}`,
    }),

    createBlog: builder.mutation({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetSingleBlogQuery,
  useCreateBlogMutation,
} = baseApi;

export default baseApi;
