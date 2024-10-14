// productsCategorySlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductsCategoryState {
  label: string;
  value: string;
}

const initialState: ProductsCategoryState = {
  label: "",
  value: "",
};

export const productsCategorySlice = createSlice({
  name: "productsCategory",
  initialState,
  reducers: {
    setProductsVariantType: (
      state,
      action: PayloadAction<ProductsCategoryState>
    ) => {
      state.label = action.payload.label;
      state.value = action.payload.value;
    },
  },
});

export const { setProductsVariantType } = productsCategorySlice.actions;

export const selectProductsVariant = (state: any) => state.productsVariantType;

export default productsCategorySlice.reducer;
