import { createSlice } from "@reduxjs/toolkit";
import datas from "@/../public/product.json";
import { ICartState } from "@/interfaces/index";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: {
      product: [],
    },
    storedCart: [],
  },
  reducers: {
    addcart(state: any, { payload }: any) {
      return { ...state, cart: payload };
    },
    addStoredCart(state: ICartState, { payload }) {
      // Extracting the IDs and quantities from the payload
      const payloadData = payload?.reduce((acc: any, item: any) => {
        acc[item._id] = item.quantity || 1;
        return acc;
      }, {});

      // Updating state.storedCart with quantities
      state.storedCart = payload?.map((product: any) => ({
        ...product,
        quantity: payloadData[product._id] || 1,
      }));
      // state.storedCart = payload;
    },
    getStoredData:(state,action)=>{
      state.storedCart=action.payload;
    },
    incrementQuantity(state, { payload }) {
      const item: any = state.storedCart.find((item: any) => item._id === payload._id);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity(state, { payload }) {
      const item: any = state.storedCart.find((item: any) => item._id === payload._id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});
export const { addcart, addStoredCart, incrementQuantity, decrementQuantity,getStoredData } = cartSlice.actions;
export default cartSlice.reducer;
