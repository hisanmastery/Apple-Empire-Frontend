import fetchShippingSlice from "@/store/api/shipping-methods/ShippingMethodsSlice";
export const shippingApi = fetchShippingSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    //shipping method
    getAllShippingMethods: builder.query({
      query: () => ({
        url: `/all-shipping-methods`,
        method: "GET",
      }),
      providesTags: ["shipping-methods"],
    }),
  }),
});
export const { useGetAllShippingMethodsQuery } = shippingApi;
