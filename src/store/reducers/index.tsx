import cartslice from "../features/cart/cartSlice";
import productsCategorySlice from "../features/products/productsCategorySlice";
import productsPriceRangeSlice from "../features/products/productsPriceRangeSlice";
import userSlice from "../features/user/userSlice";

const reducers = {
  priceRange: productsPriceRangeSlice,
  cart: cartslice,
  productsCategory: productsCategorySlice,
  user:userSlice
};

export default reducers;
