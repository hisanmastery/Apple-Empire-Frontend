// slices/priceRangeSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const productsCategorySlice = createSlice({
    name: "productsCategory",
    initialState: {
        name: ""
    },
    reducers: {
        setProductsCategory: (state, action) => {
            state.name = action.payload;
        }
    },
});

export const { setProductsCategory } = productsCategorySlice.actions;

export const selectProductsCategory = (state: any) => state.productsCategory;

export default productsCategorySlice.reducer;
