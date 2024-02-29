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
      // Extracting the IDs from the store array
      const productids = payload.map((item: any) => item?.id);
      // Filtering products from datas based on storeIds
      const filteredProducts = datas?.products?.filter((product: any) =>
        productids.includes(product.id)
      );

      // Extracting the IDs and quantities from the payload
      const payloadData = payload.reduce((acc: any, item: any) => {
        acc[item.id] = item.quantity || 0;
        return acc;
      }, {});

      // Updating state.storedCart with quantities
      state.storedCart = filteredProducts?.map((product: any) => ({
        ...product,
        quantity: payloadData[product.id] || 0,
      }));
      state.storedCart = payload;
    },
  },
});
export const { addcart, addStoredCart } = cartSlice.actions;
export default cartSlice.reducer;
