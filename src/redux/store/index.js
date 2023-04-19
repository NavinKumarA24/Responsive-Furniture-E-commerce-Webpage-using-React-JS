import { configureStore } from "@reduxjs/toolkit";
import  cartSlice  from "../reducer/Cartreducer";

export default configureStore({
    reducer:{
        cart:cartSlice
    }})