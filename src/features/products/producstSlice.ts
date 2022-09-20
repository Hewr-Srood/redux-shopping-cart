import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    reducers: {
        reciviedProducts(state, action: PayloadAction<Product[]>) {
            const products = action.payload
            products.forEach(product => {
                state.products[product.id] = product
            })

        }
    }
})
export const { reciviedProducts } = productsSlice.actions;
export default productsSlice.reducer