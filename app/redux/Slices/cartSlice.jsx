"use client"
import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    initialState: [],
    name: "cartSice",
    reducers: {
        addToCart: (state, action) => {
            const clone = { ...action.payload, qty: 1 }
            state.push(clone)
        },
        deleteFromCart: (state, action) => {
            return state.filter((prod) => prod.id !== action.payload.id)
        },
        clearCart: (state, action) => {
            return []
        },
        increaseQuantity: (state, action) => {
            const product = state.find((prod) => prod.id === action.payload.id);
            if (product) {
                product.qty += 1;
            }
        },
    }
})
export const { addToCart, deleteFromCart, increaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;