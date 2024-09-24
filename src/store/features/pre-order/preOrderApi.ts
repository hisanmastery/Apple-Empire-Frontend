import fetchPreOrderSlice from "@/store/api/pre-order/preOrderSlice";

export const preOrderApi = fetchPreOrderSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    //create api
    createPreOrder: builder.mutation({
      query: (data: any) => ({
        url: `/create-pre-order`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useCreatePreOrderMutation } = preOrderApi;
