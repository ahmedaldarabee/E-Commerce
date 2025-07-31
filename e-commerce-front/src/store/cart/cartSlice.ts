import type { TProducts } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";
import { getCartTotalQuantitySelector } from "./selectors";
import actGetProductsByItems from "./actGetProductsByItems";
import type { TLoading } from "@customTypes/shared";

interface ICartState {
    items: {
        // index signature 1:1, 1:2 ....
        // also be as: cartItem[el.id] - as id 
        [key: string]: number
    },
    productsFullInfo:TProducts[],
    loading: TLoading,
    error: null | string,
}

const initialState:ICartState = {
    items: {},
    productsFullInfo: [],
    loading:"idle",
    error:null,
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state , action) => {
            const id = action.payload;
            // -> state.items[id] <- that mean if id already exist, increase the quantity of it
            // but when there exist an error in system and try to add items not existence the default that be as 1
            if(state.items[id]){
                state.items[id]++;
            }else{
                state.items[id]=1;
            }
        },
        cartItemChangeQuantity: (state,action) => {
            state.items[action.payload.id] = action.payload.quantity;
        },
        cartItemRemove: (state,action) => {
            // to delete object key
            delete state.items[action.payload];
            state.productsFullInfo = state.productsFullInfo.filter((el) => el.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actGetProductsByItems.pending,(state)=>{
            state.loading = "pending";
            state.error = null
        });
        builder.addCase(actGetProductsByItems.fulfilled,(state,action)=>{
            state.loading = "succeeded";
            state.productsFullInfo = action.payload;
        });
        builder.addCase(actGetProductsByItems.rejected,(state,action)=>{
            state.loading = "failed";
            if(action.payload && typeof action.payload === "string"){
                state.error = action.payload;
            }
        });
    }
});

export {
    getCartTotalQuantitySelector
    ,actGetProductsByItems
};

// synchronous
export const { 
    addToCart,
    cartItemChangeQuantity,
    cartItemRemove
} = cartSlice.actions;

export default cartSlice.reducer;