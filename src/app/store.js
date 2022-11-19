import LoginSlice from "../features/components/form/Login/LoginSlice";
import RegisterSlice from "../features/components/form/Register/RegisterSlice";
import CartSlice from "../features/components/ui/Cart/CartSlice";
import OrderSlice from "../features/components/ui/Order/OrderSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        auth: LoginSlice.reducer,
        register: RegisterSlice.reducer,
        cart: CartSlice.reducer,
        orderBuy: OrderSlice.reducer,
    },
})

export default store;