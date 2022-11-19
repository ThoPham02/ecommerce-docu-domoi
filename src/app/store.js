import LoginSlice from "../features/components/form/Login/LoginSlice";
import RegisterSlice from "../features/components/form/Register/RegisterSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        auth: LoginSlice.reducer,
        register: RegisterSlice.reducer,
    },
})

export default store;