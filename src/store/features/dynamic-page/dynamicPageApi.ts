import fetchAdsSectionsSlice from "@/store/api/ads-section/adsSectionSlice";

export const AdsSectionApi = fetchAdsSectionsSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    // get all
    getAllAds: builder.query({
      query: () => ({
        url: `/get-all`,
        method: "get",
      }),
    }),
    //get single
    getSingleAds: builder.query({
      query: ({ slug }: any) => ({
        url: `/get/${slug}`,
        method: "get",
      }),
    }),
  }),
});
export const { useGetAllAdsQuery, useGetSingleAdsQuery } = AdsSectionApi;
