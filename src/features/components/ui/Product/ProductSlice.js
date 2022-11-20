import { createSlice } from "@reduxjs/toolkit";
import productsDB from "../../../data/products";

const ProductSlice = createSlice({
    name: "product",
    initialState: productsDB,
    reducers: {
        addProduct: (state, { payload }) => {
            state.unshift(payload)
            return state
        },
    }
})

export default ProductSlice;