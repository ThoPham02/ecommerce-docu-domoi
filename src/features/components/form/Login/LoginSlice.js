import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
    name: "auth",
    initialState: {},
    reducers: {
        login: (state, action) => {
            state = action.payload;
            return state;
        },
        logout: (state) => {
            state = {};
        }
    }
})

export default LoginSlice;