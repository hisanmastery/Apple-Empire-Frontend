import fetchProductsSlice from "@/store/api/products/productsSlice";
const category = "category";
export const categoryApi = fetchProductsSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    // get all categogy
    getAllCategory: builder.query({
      query: (arg: any) => ({
        url: `${category}/get-all-category`,
        method: "get",
        params: {
          limit: arg?.limit,
          page: arg?.page,
          categoryName: arg?.categoryName,
        },
      }),
    }),

    // get category list
    getCategoryList: builder.query({
      query: (arg: any) => ({
        url: `${category}/get-category-list`,
        method: "get",
        params: {
          limit: arg?.limit,
          page: arg?.page,
          categoryName: arg?.categoryName,
        },
      }),
    }),
  }),
});
export const { useGetAllCategoryQuery, useGetCategoryListQuery } = categoryApi;
