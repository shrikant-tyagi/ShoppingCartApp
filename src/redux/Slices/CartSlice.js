import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name : "cart",
    initialState:{
        cartItems : [],
    },
    reducers : {
        removeItem: (state,action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
        } ,
        addItem: (state,action) => {
            state.cartItems.push(action.payload);
        },
        clear: (state) => {
            state.cartItems = []
        }
    }
})

export const {removeItem , addItem , clear} = CartSlice.actions
export default CartSlice.reducer