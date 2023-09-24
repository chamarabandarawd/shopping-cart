import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from "./reducers/postSlice";


const store=configureStore({
    reducer:{
        post:postSliceReducer

    }
})

export default store;