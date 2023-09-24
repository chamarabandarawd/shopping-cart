import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

const initialState={
    data:[],
    loading:'idle',
    error:null
}

export const getPost= createAsyncThunk('getPost',async(name)=>{
    const res= await fetch('https://jsonplaceholder.typicode.com/posts')
    const data=await res.json();
    if(Array.isArray(data)){
        return {
            name,
            data
        }
    }else{
        return{err:'some error'}
    }

})

const postSlice=createSlice({
    name:'post-slice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getPost.fulfilled,(state,action)=>{
           if(action.payload.err){
            state.loading='failed';
            state.error=action.payload;
           }else{
               state.loading='completed';
               state.data=action.payload;
           }
        })
        builder.addCase(getPost.pending,(state)=>{
            state.loading='pending'
        })
        builder.addCase(getPost.rejected,(state,action)=>{
            state.loading='rejected';
            state.error=action.payload;
        })
    }
})

export const selectAllPosts=(store)=>store.post;
export default postSlice.reducer;