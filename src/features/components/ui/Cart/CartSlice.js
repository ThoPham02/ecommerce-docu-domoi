import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, { payload }) => {
        if(state.some(item => item.productId === payload.productId)) {
            return state;
        }
        state.push(payload)
        return state;
    },
    deleteItem: (state, { payload }) => {
        state = state.filter((item) => item.productId !== payload);
        return state
    },
    toggleItem: (state, { payload }) => {
        state.map(item => {
            if (item.productId === payload) {
                item.checked = !item.checked;
            }
            return item;
        })
        return state;
    },
    toggleAllItems: (state) => {
        if (state.every(item => item.checked === true)) {
            state.map(item => {
                item.checked = false;
                return item;
            })
        } else {
            state.map(item => {
                item.checked = true;
                return item;
            })
        }
        return state;
    }
  },
});

export default CartSlice;