// slices/priceRangeSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const productsCategorySlice = createSlice({
    name: "productsCategory",
    initialState: {
        displayType: "",
        ram: "",
        shape: "",
        internalStorage: "",
        chipset: "",
        region: ""
    },
    reducers: {
        setProductsDisplayType: (state, action) => {
            state.displayType = action.payload;
        },
        setProductsRam: (state, action) => {
            state.ram = action.payload;
        },
        setProductsShape: (state, action) => {
            state.shape = action.payload;
        },
        setProductsInternalStorage: (state, action) => {
            state.internalStorage = action.payload;
        },
        setProductsChipset: (state, action) => {
            state.chipset = action.payload;
        },
        setProductsRegion: (state, action) => {
            state.region = action.payload;
        },
    },
});

export const { setProductsDisplayType, setProductsChipset, setProductsInternalStorage, setProductsRam, setProductsRegion, setProductsShape } = productsCategorySlice.actions;

export const selectProductsCategory = (state: any) => state.productsCategory;

export default productsCategorySlice.reducer;
