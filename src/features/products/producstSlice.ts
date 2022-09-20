import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../app/api";
export interface productsState {
    products: {
        [id: string]: Product
    }
}
const initialState: productsState = {
    products: {}
}
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}
})

export default productsSlice.reducer