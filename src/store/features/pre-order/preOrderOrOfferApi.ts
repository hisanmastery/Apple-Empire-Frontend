import fetchPreOrderSlice from "@/store/api/pre-order/preOrderSlice";
const preOrder = "/pre-order";
const offer = "/offer";
export const preOrderApi = fetchPreOrderSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    //create api
    createPreOrder: builder.mutation({
      query: (data: any) => ({
        url: `${preOrder}/create-pre-order`,
        method: "POST",
        body: data,
      }),
    }),
    // get all offer
    getAllOffer: builder.query({
      query: () => ({
        url: `${offer}/get-all-offer`,
        method: "GET",
      }),
      providesTags: ["pre-order"],
    }),
    //get single offer
    getSingleOffer: builder.query({
      query: (id: any) => ({
        url: `${offer}/single-offer/${id}`,
        method: "GET",
      }),
      providesTags: ["pre-order"],
    }),
  }),
});
export const {
  useCreatePreOrderMutation,
  useGetAllOfferQuery,
  useGetSingleOfferQuery,
} = preOrderApi;
