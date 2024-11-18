import fetchAdsSectionsSlice from "@/store/api/ads-section/adsSectionSlice";
const adsSection = "/ads-section";
const carousel = "/carousel";
export const AdsSectionApi = fetchAdsSectionsSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    // get all
    getAllAds: builder.query({
      query: () => ({
        url: `${adsSection}/get-all`,
        method: "get",
      }),
    }),
    //get single
    getSingleAds: builder.query({
      query: ({ slug }: any) => ({
        url: `${adsSection}/get/${slug}`,
        method: "get",
      }),
    }),
    // get all carousel
    getAllCarousel: builder.query({
      query: ({ page, limit }: any) => ({
        url: `${carousel}/get-all-carousel?page=${page}&limit=${limit}`,
        method: "get",
      }),
    }),
  }),
});
export const {
  useGetAllAdsQuery,
  useGetSingleAdsQuery,
  useGetAllCarouselQuery,
} = AdsSectionApi;
