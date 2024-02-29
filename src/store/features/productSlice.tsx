import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "jobs",
  initialState: {
    isDrawerOpen: false,
  },
  reducers: {
    DrawerOpen(state, { payload }) {
      state.isDrawerOpen = payload;
    },
  },
});
export const { DrawerOpen } = productSlice.actions;
export default productSlice.reducer;
