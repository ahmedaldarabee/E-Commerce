import type { TProducts } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";
import { getCartTotalQuantitySelector } from "./selectors";

interface ICartState {
    items: {
        // index signature 1:1, 1:2 ....
        // also be as: cartItem[el.id] - as id 
        [key: number]: number
    },
    productFullInfo:TProducts[],
}

const initialState:ICartState = {
    items: {},
    productFullInfo: []
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state , action) => {
            const id = action.payload;
            console.log('cartSlice-action.payload: ',action.payload);
            // -> state.items[id] <- that mean if id already exist, increase the quantity of it
            // but when there exist an error in system and try to add items not existence the default that be as 1
            if(state.items[id]){
                state.items[id]++;
            }else{
                state.items[id]=1;
            }
        }
    },
});

export { getCartTotalQuantitySelector };

// synchronous
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;