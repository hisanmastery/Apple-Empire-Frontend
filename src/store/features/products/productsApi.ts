import fetchProductsSlice from "@/store/api/products/productsSlice";

export const productsApi = fetchProductsSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    // get all products
    getProductsLists: builder.query({
      query: (arg: any) => ({
        url: `/get-all-products`,
        method: "get",
        params: {
          page: arg?.page,
          limit: arg?.limit,
          productType: arg?.productType || "",
          type: arg?.type || "",
          brand: arg?.brand || "",
          offerType: arg?.offerType || "",
          category: arg?.category || "",
          searchText: arg?.searchText,
          variantOptionName: arg?.variantOptionName,
          variantOptionValue: arg?.variantOptionValue,
          minVariantPrice: arg?.minVariantPrice,
          maxVariantPrice: arg?.maxVariantPrice,
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
