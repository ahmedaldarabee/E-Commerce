import { createSlice } from "@reduxjs/toolkit";
import type { TLoading } from "@customTypes/shared";
import type { TProducts } from "@customTypes/product";
import actGetProductsByCatPrefix from "./act/actGetProductsByCatPrefix";
import isString from "@customTypes/guard";

interface ICategoriesState {
    records: TProducts[];
    loading: TLoading;
    error: string | null;
}

const initialState:ICategoriesState = {
    records: [],
    loading: "idle",
    error: null,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        // after exit from each product page that clean records
        productsCleanUp: (state) => {
            state.records = []
        }
    },
    extraReducers: (builder) => {
        // first state to the data
        builder.addCase(actGetProductsByCatPrefix.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actGetProductsByCatPrefix.fulfilled, (state,action) => {
            state.loading = "succeeded";
            // Guard
            state.records = action.payload;
        });
        builder.addCase(actGetProductsByCatPrefix.rejected, (state,action) => {
            state.loading = "failed";
            if(isString(action.payload )){
                state.error = action.payload;
            }
        });
    }
})

export const {productsCleanUp} = productsSlice.actions;
export {actGetProductsByCatPrefix};
export default productsSlice.reducer;