import { createSlice } from "@reduxjs/toolkit";
import usersDB from "../../../data/users";

const RegisterSlice = createSlice({
    name: "register",
    initialState: usersDB,
    reducers: {
        register: (state, action) => {
            state.push(action.payload);
        },
        changeInfo: (state, action) => {
            state.map(user => {
                if (user.id === action.payload.id) {
                    user = action.payload;
                }
                return user;
            })
        }
    }
})

export default RegisterSlice;