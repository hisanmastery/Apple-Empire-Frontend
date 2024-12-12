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
    //create api
    createAdviesAndComplain: builder.mutation({
      query: (data: any) => ({
        url: `/complain-by-advise/create-complain-by-advise`,
        method: "POST",
        body: data,
      }),
    }),
     //get whatsapp
     getAllWhatsappNumber: builder.query({
      query: () => ({
        url: `/whatsapp/get-whatsapp`,
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
  useCreateAdviesAndComplainMutation,
  useGetAllWhatsappNumberQuery
} = preOrderApi;
