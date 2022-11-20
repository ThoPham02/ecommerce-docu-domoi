import { createSlice } from "@reduxjs/toolkit";

const ProductFilterSlice = createSlice({
  name: "filter",
  initialState: { name: "", tag: "" },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
      return state;
    },
    setTag: (state, action) => {
      if (state.tag === action.payload) {
        state.tag = "";
      } else {
        state.tag = action.payload;
      }
      return state;
    },
  },
});

export default ProductFilterSlice;
