import LoginSlice from "../features/components/form/Login/LoginSlice";
import RegisterSlice from "../features/components/form/Register/RegisterSlice";
import CartSlice from "../features/components/ui/Cart/CartSlice";
import OrderSlice from "../features/components/ui/Order/OrderSlice";
import ProductFilterSlice from "../features/components/ui/Product/ProductFilterSlice";
import ProductSlice from "../features/components/ui/Product/ProductSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        auth: LoginSlice.reducer,
        register: RegisterSlice.reducer,
        cart: CartSlice.reducer,
        orderBuy: OrderSlice.reducer,
        filter: ProductFilterSlice.reducer,
        product: ProductSlice.reducer,
    },
})

export default store;