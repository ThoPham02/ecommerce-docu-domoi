import { createSlice } from "@reduxjs/toolkit";

const SaleSlice = createSlice({
    name: "sale",
    initialState: [],
    reducers: {
        addProduct: (state, { payload }) => {
            return state.push(payload)
        },
    }
})