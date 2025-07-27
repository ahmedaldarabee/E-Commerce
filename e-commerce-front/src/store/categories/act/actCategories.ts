import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { TCategories } from "@customTypes/category";

type TCategory = TCategories;
type TResponse = TCategory[];

const actGetCategories = createAsyncThunk("categories/actGetCategories",async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await axios.get<TResponse>("/categories");
            return res.data;
        } catch (error) {
        
            if (axios.isAxiosError(error))
                return rejectWithValue(error.response?.data.message || error.message);

            return rejectWithValue("Un Expected Error!");
        }
    }
);

export default actGetCategories;
