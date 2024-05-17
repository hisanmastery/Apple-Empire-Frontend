import fetchCartSlice from "@/store/api/cart/cartSlice";

export const cartApi = fetchCartSlice.injectEndpoints({
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
    addToCart: builder.mutation({
      query: ({ payload }: any) => ({
        url: "/create-cart",
        method: "post",
        body: payload,
      }),
    }),
    //edit products
    updateCart: builder.mutation({
      query: ({ id, payload }: any) => ({
        url: `/update-cart/${id}`,
        method: 'PUT',
        body: payload
      }),
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
  useAddToCartMutation,
  useGetEmailCartQuery,
  useAddToCartDeleteMutation,
  useUpdateCartMutation
} = cartApi;
