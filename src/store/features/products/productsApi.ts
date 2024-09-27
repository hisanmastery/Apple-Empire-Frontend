import fetchProductsSlice from "@/store/api/products/productsSlice";

export const productsApi = fetchProductsSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    // get all products
    getProductsLists: builder.query({
      query: (arg: any) => ({
        url: `/get-all-products`,
        method: "get",
        params: {
          productType: arg?.productType || "",
          ram: arg?.ram || "",
          type: arg?.type || "",
          offerType: arg?.offerType || "",
          internalStorage: arg?.internalStorage || "",
          chipset: arg?.chipset || "",
          region: arg?.region || "",
          displayType: arg?.displayType || "",
          category: arg?.category,
          subCategory: arg?.subCategory,
          searchText: arg?.searchText,
        },
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
