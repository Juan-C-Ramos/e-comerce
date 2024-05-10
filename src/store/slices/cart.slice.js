import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice(
    {
    name: "cart",
    initialState: null,
    reducers: {
        setCart: (value, action) =>  {
            value = action.payload;
        }},
})

export const { setCart } = cart.actions;

export default cart.reducer;