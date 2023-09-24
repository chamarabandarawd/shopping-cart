import { createSlice } from "@reduxjs/toolkit";

const initialState=[];

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItemToCart:{
            reducer:(state,action)=>{
                const id=action.payload.id;
                const temObj=state.find((ele)=>ele.id===id);

                if(temObj){
                    temObj.count+=1;
                }else{
                    state.push(action.payload)
                }


            },
            prepare:(id,price,cpu,ram)=>({
                payload:{
                    id,
                    price,
                    cpu,
                    ram,
                    count:1
                }
            })
        }
    }
});

export const cartSelector=(store)=>store.cart;

export const {addItemToCart}=cartSlice.actions;

export default cartSlice.reducer;