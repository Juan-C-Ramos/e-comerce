import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cart.slice";


const store = configureStore({
    reducer: {
        cart,
    },

});

export default store;