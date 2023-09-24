import { createSlice } from "@reduxjs/toolkit";
import store from "../store";

const initialState=[]
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItemToCart:(state,action)=>{
            state.push(action.payload)
        }
    }
});

export const cartSelector=(store)=>store.cart
export const {addItemToCart}=cartSlice.actions;

export default cartSlice.reducer;