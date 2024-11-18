import fetchDynamicPageSlice from "@/store/api/dynamic-page/dynamicPageSlice";
export const dynamicPageApi = fetchDynamicPageSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    // get all
    getAllDynamicPage: builder.query({
      query: () => ({
        url: `/get-all`,
        method: "get",
      }),
    }),
    //get single
    getSingleDynamicPage: builder.query({
      query: ({ slug }: any) => ({
        url: `/get/${slug}`,
        method: "get",
      }),
    }),
  }),
});
export const { useGetAllDynamicPageQuery, useGetSingleDynamicPageQuery } =
  dynamicPageApi;
