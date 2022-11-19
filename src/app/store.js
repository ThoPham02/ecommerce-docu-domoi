import LoginSlice from "../features/components/form/Login/LoginSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        auth: LoginSlice.reducer,
    },
})

export default store;