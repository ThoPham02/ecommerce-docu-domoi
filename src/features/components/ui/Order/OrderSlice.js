import { createSlice } from "@reduxjs/toolkit";

const OrderSlice = createSlice({
    name: 'orderBuy',
    initialState: [],
    reducers: {
        addOrderBuy: (state, {payload}) => {
            state.push(payload)
            return state
        }
    }
})

export default OrderSlice;