import fetchBrandsSlice from "@/store/api/brand/brandsSlice";

export const brandApi = fetchBrandsSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    getAllBrand: builder.query({
      query: (arg: any) => ({
        url: `/get-all-brand`,
        method: "GET",
        params: { limit: arg?.limit, page: arg?.page },
      }),
    }),
  }),
});

export const { useGetAllBrandQuery } = brandApi;
