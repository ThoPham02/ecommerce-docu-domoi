import { createSlice } from "@reduxjs/toolkit";

const SaleSlice = createSlice({
    name: "orderSale",
    initialState: [],
    reducers: {
        addProduct: (state, { payload }) => {
            return state.push(payload)
        },
    }
})