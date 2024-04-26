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
      query: (id: any) => ({
        url: `/get-single-products/${id}`,
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
    updateCart: builder.query({
      query: () => ({}),
    }),
  }),
});
export const { useAddToCartMutation } = cartApi;
