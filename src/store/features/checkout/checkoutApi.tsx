import fetchCheckoutSlice from "@/store/api/checkout/checkoutSlice";

export const cartApi = fetchCheckoutSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    // get all products
    getAllCart: builder.query({
      query: ({ currentPage, limit }: any) => ({
        url: `/get-all-products?page=${currentPage}&limit=${limit}`,
        method: "get",
      }),
    }),
    //get single products
    getEmailCart: builder.query({
      query: ({ email }: any) => ({
        url: `/get-cart-by-email?email=${email}`,
        method: "get",
      }),
    }),
    //add to cart products
    createPayment: builder.mutation({
      query: ({ payload }: any) => ({
        url: "/create-payment",
        method: "post",
        body: payload,
      }),
    }),

    // payment status update
    PaymentStatusUpdate: builder.mutation({
      query: ({ transactionId, payload }: any) => ({
        url: `/update-payment-status?transactionId=${transactionId}`,
        method: "put",
        body: payload,
      }),
    }),
    //edit products
    updateCart: builder.query({
      query: () => ({}),
    }),
    //delete add too cart
    addToCartDelete: builder.mutation({
      query: ({ id }: any) => ({
        url: `/delete-cart/${id}`,
        method: "delete",
      }),
    }),

    // Getting All order using email
    customerOrders: builder.query({
      query: (email: any) => ({
        url: `/get-order-email/${email}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    // Getting single order by id
    getSingleOrder: builder.query({
      query: (id: any) => ({
        url: `/get-single-order/${id}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    //shipping method
    getAllShippingMethods: builder.query({
      query: () => ({
        url: `shipping-methods/all-shipping-methods`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
  }),
});
export const {
  useCreatePaymentMutation,
  usePaymentStatusUpdateMutation,
  useGetEmailCartQuery,
  useAddToCartDeleteMutation,
  useCustomerOrdersQuery,
  useGetSingleOrderQuery,
  useLazyGetSingleOrderQuery,
} = cartApi;
