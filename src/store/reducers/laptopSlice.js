import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState=[
    {
        id:nanoid(),
        price:120000,
        cpu:'i3',
        ram:'4GB'
    },{
        id:nanoid(),
        price:130000,
        cpu:'i3',
        ram:'6GB'
    },{
        id:nanoid(),
        price:176000,
        cpu:'i7',
        ram:'8GB'
    }
    
]

const laptopSlice=createSlice({
    name:'laptop',
    initialState,
    reducers:{
        addLaptop:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const laptopSelector=(store)=>store.laptop;

export const {addLaptop}=laptopSlice.actions;

export default laptopSlice.reducer;