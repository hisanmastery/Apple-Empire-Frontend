import fetchProductsSlice from "@/store/api/products/productsSlice";
const category = "category"
export const categoryApi = fetchProductsSlice.injectEndpoints({
    endpoints: (builder: any) => ({
        // get all products
        getAllCategory: builder.query({
            query: (arg: any) => ({
                url: `${category}/get-all-category?limit=${arg?.limit}&page=${arg?.page}`,
                method: "get",
            }),
        }),
    }),
});
export const {
    useGetAllCategoryQuery,
} = categoryApi;
