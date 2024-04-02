"use client"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk("productSlice/fetchProducts", async () => {
    const res = await fetch("http://localhost:8000/Data");
    const data = await res.json()
    return data
})
const ProductSlice = createSlice({
    initialState: [],
    name: "productSlice",
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload
        })
    }

})
export const { } = ProductSlice.actions;
export default ProductSlice.reducer;