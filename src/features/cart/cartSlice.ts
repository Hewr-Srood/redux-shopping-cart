import { createSlice } from "@reduxjs/toolkit";

export interface cartState{
    items:{
        [productId:string]:number
    }
}
const initialState:cartState={
    items:{}
}
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{}
})

export default cartSlice.reducer