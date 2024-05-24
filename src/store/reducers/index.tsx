import cartslice from "../features/cart/cartSlice";
import productsCategorySlice from "../features/products/productsCategorySlice";
import productsPriceRangeSlice from "../features/products/productsPriceRangeSlice";
const reducers = {
  priceRange: productsPriceRangeSlice,
  cart: cartslice,
  productsCategory: productsCategorySlice,
};

export default reducers;
