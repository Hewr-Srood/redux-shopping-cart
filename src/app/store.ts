import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import producstReducer from "../features/products/producstSlice";

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        products:producstReducer
    }
})
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch