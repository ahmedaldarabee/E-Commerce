import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actCategories";
import type { TLoading } from "@customTypes/shared";
import type { TCategories } from "@customTypes/category";

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
    reducers:{},
    extraReducers: (builder) => {
        // first state to the data
        builder.addCase(actGetCategories.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actGetCategories.fulfilled, (state,action) => {
            state.loading = "succeeded";
            // Guard
            state.records = action.payload;
        });
        builder.addCase(actGetCategories.rejected, (state,action) => {
            state.loading = "failed";
            if(action.payload && typeof action.payload === "string"){
                state.error = action.payload;
            }
        });
    }
})

export {actGetCategories };
export default categoriesSlice.reducer;