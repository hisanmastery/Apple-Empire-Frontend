import fetchCartSlice from "@/store/api/cart/cartSlice";
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
    }),
});
export const {
    useCreatePaymentMutation,
    usePaymentStatusUpdateMutation,
    useGetEmailCartQuery,
    useAddToCartDeleteMutation,
} = cartApi;
