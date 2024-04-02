"use client";

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './Slices/cartSlice';
import ProductSlice from "./Slices/prodSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: ProductSlice
    },
});

export default store;