// slices/priceRangeSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const priceRangeSlice = createSlice({
    name: "priceRange",
    initialState: {
        min: 250,
        max: 100000,
    },
    reducers: {
        setPriceRangeMin: (state, action) => {
            state.min = action.payload;
        },
        setPriceRangeMax: (state, action) => {
            state.max = action.payload;
        },
    },
});

export const { setPriceRangeMin, setPriceRangeMax } = priceRangeSlice.actions;

export const selectPriceRange = (state: any) => state.priceRange;

export default priceRangeSlice.reducer;
