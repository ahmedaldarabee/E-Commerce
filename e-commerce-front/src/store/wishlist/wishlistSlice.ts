import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";
import actGetWishlist from "./act/actGetWishlist";
import type { TLoading } from "@customTypes/shared";
import type { TProducts } from "@customTypes/product";
import isString from "@customTypes/guard";

// this array -> itemsId <- that hold just id's of the products

interface IWishlist {
    itemsId: number[],
    error: null | string,
    loading: TLoading,
    productsFullInfo: TProducts[];
}

const initialState : IWishlist = {
    itemsId: [],
    productsFullInfo:[],
    error: null,
    loading:"idle"
}

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState,
    reducers:{
        cleanWishlistFullInfoCleanUp: (state) => {
            state.productsFullInfo = []
        }
    },
    extraReducers: ((builder) => {
        // First Action Handler [ actLikeToggle ]
        builder.addCase(actLikeToggle.pending,(state) => {
            state.error = null
        });
        // add and remove that defined in createAsyncThunk
        builder.addCase(actLikeToggle.fulfilled,(state,action) => {
            if(action.payload.type == "add"){
                // add section
                state.itemsId.push(action.payload.id);
            }else{
                // remove section
                state.itemsId = state.itemsId.filter((el) => el !== action.payload.id);
                state.productsFullInfo = state.productsFullInfo.filter((el) => el.id !== action.payload.id);
            }
        });
        builder.addCase(actLikeToggle.rejected, (state,action) => {
            if(action.payload && typeof action.payload === 'string'){
                state.error = action.payload;
            }
        });

        // Second Action Handler [ actGetWishlist ]
        builder.addCase(actGetWishlist.pending,(state) => {
            state.loading="pending"
            state.error = null
        });
        builder.addCase(actGetWishlist.fulfilled,(state,action) => {
            state.loading="succeeded";
            state.productsFullInfo = action.payload ?? [];
        });
        builder.addCase(actGetWishlist.rejected, (state,action) => {
            state.loading="failed"
            if(isString(action.payload)){
                state.error = action.payload;
            }
        })
    })
});

export {
    actLikeToggle,
    actGetWishlist
}

export const { cleanWishlistFullInfoCleanUp } = wishlistSlice.actions

export default wishlistSlice.reducer