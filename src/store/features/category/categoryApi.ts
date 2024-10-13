import fetchProductsSlice from "@/store/api/products/productsSlice";
const category = "category";
export const categoryApi = fetchProductsSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    // get all products
    getAllCategory: builder.query({
      query: (arg: any) => ({
        url: `${category}/get-all-category`,
        method: "get",
        params: {
          limit: arg,
          page: arg?.page,
          categoryName: arg?.categoryName,
        },
      }),
    }),
  }),
});
export const { useGetAllCategoryQuery } = categoryApi;
