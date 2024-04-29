import fetchProductsSlice from "@/store/api/products/productsSlice";

export const productsApi = fetchProductsSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    // get all products
    getProductsLists: builder.query({
      query: ({ currentPage, limit }: any) => ({
        url: `/get-all-products?page=${currentPage}&limit=${limit}`,
        method: "get",
      }),
    }),
    //get single products
    getSingleProducts: builder.query({
      query: ({ id }: any) => ({
        url: `/get-single-product/${id}`,
        method: "get",
      }),
    }),
    //post products
    postProducts: builder.mutation({
      query: ({ payload }: any) => ({
        url: "/post-products",
        method: "post",
        body: payload,
      }),
    }),
    //edit products
    updateProducts: builder.query({
      query: () => ({}),
    }),
  }),
});
export const {
  useGetProductsListsQuery,
  useGetSingleProductsQuery,
  usePostProductsMutation,
  useUpdateProductsMutation,
} = productsApi;
