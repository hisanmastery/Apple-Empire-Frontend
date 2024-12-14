import fetchAdsSectionsSlice from "@/store/api/ads-section/adsSectionSlice";
const adsSection = "/ads-section";
const carousel = "/carousel";
const websiteLogo = "/logo";
const headline = "/headline";
const filterData = "/filter";
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
    // get all carousel
    getAllLogo: builder.query({
      query: () => ({
        url: `${websiteLogo}/get-logo`,
        method: "get",
      }),
    }),
    getAllHeadline: builder.query({
      query: () => ({
        url: `${headline}/get-headline`,
        method: "get",
      }),
    }),
    getAllFilterData: builder.query({
      query: () => ({
        url: `${filterData}/get-all`,
        method: "get",
      }),
    }),
  }),
});
export const {
  useGetAllAdsQuery,
  useGetSingleAdsQuery,
  useGetAllCarouselQuery,
  useGetAllFilterDataQuery,
  useGetAllHeadlineQuery,
  useGetAllLogoQuery,
} = AdsSectionApi;
