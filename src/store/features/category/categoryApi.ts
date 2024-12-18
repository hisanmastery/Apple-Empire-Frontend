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
    // get all
    getAllCategoryForOrderList: builder.query({
      query: () => ({
        url: `${category}/get-top-category`,
        method: "get",
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
    //single cetegroty by subCategory
    getSingleCategoryBySubCategory: builder.query({
      query: (arg: any) => ({
        url: `${category}/single-category-by-subCategories`,
        method: "get",
        params: { canonicalUrl: arg?.canonicalUrl },
      }),
    }),
    // navbar category
    getNavbarCategoryList: builder.query({
      query: () => ({
        url: `${category}/get-navbar-category_with_subCategory`,
        method: "get",
      }),
    }),
    // footer category
    getFooterCategoryList: builder.query({
      query: () => ({
        url: `${category}/get-footer-category`,
        method: "get",
      }),
    }),
    // category with product
    getCategoryWithProduct: builder.query({
      query: (arg: any) => ({
        url: `${category}/get-category-with-products`,
        method: "get",
        params: { slug: arg?.slug },
      }),
    }),
  }),
});
export const {
  useGetAllCategoryQuery,
  useGetCategoryListQuery,
  useGetSingleCategoryBySubCategoryQuery,
  useGetAllCategoryForOrderListQuery,
  useGetNavbarCategoryListQuery,
  useGetFooterCategoryListQuery,
  useGetCategoryWithProductQuery,
} = categoryApi;
