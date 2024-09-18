import fetchPreOrderSlice from "@/store/api/pre-order/preOrderSlice";

export const preOrderApi = fetchPreOrderSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    //empaln api 
    createPreOrder: builder.mutation({
      query: (payload:any) => ({
        url: `/create-pre-order`,
        method: "POST",
        body:payload
      }),
    }),
  }),
});
export const {
useCreatePreOrderMutation
} = preOrderApi;
