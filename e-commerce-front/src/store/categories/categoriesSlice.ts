import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actCategories";
import type { TLoading } from "@customTypes/shared";
import type { TCategories } from "@customTypes/category";
import isString from "@customTypes/guard";

interface ICategoriesState {
    records: TCategories[];
    loading: TLoading;
    error: string | null;
}

const initialState:ICategoriesState = {
    records: [],
    loading: "idle",
    error: null,
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers:{
        categoriesRecordsCleanUp: (state) => {
            state.records = []
        }
    },
    extraReducers: (builder) => {
        // first state to the data
        builder.addCase(actGetCategories.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actGetCategories.fulfilled, (state,action) => {
            state.loading = "succeeded";
            state.records = action.payload || [];
        });
        builder.addCase(actGetCategories.rejected, (state,action) => {
            state.loading = "failed";
            if(isString(action.payload )){
                state.error = action.payload;
            }
        });
    }
})

export {actGetCategories };
export const { categoriesRecordsCleanUp } = categoriesSlice.actions;
export default categoriesSlice.reducer;