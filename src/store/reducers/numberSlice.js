import { createAction, createAsyncThunk, createReducer, createSelector } from "@reduxjs/toolkit"

const initialState = {
    number: 0,
    users:[]
}

export const increment = createAction('number-Increment');
export const decrement = createAction('number-decrement', (name, value) => {
    return {
        payload:
        {
            name,
            value
        }

    }
});

export const getUsers=createAsyncThunk('number-getUsers',async()=>{
    const res =await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();
    if(Array.isArray(data)){
        return data
    }else
    return{
        err:'some error'
    }
})

const numberReducer = createReducer(initialState, (builder) => {
    builder.addCase(increment, (state, action) => {
        state.number += action.payload;
    });
    builder.addCase(decrement, (state, action) => {
        state.number -= action.payload.value;
    });
    builder.addCase(getUsers.fulfilled,(state,action)=>{
        state.users=action.payload;
    })
});

const numberSelec = (store) => store.number.number;

export const numberSelector = createSelector([numberSelec],(number)=>{
    return number;
})

export default numberReducer;