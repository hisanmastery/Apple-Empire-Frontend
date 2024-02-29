import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: {
      product: [],
    },
    storedCart: [],
  },
  reducers: {
    // addcart(state, { payload }) {
    //   state.cart = payload;
    // },

    addcart(state, { payload }) {
      return { ...state, cart: payload };
    },
    addStoredCart(state, { payload }) {
      state.storedCart = payload;
    },
  },
});
export const { addcart, addStoredCart } = cartSlice.actions;
export default cartSlice.reducer;
