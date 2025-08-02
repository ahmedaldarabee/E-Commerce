import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { TCategories } from "@customTypes/category";
import {axiosErrorHandler} from "src/utils/index";

type TCategory = TCategories;
type TResponse = TCategory[];

const actGetCategories = createAsyncThunk("categories/actGetCategories",async (_, thunkAPI) => {
        const { rejectWithValue, signal } = thunkAPI;
        try {
            const res = await axios.get<TResponse>("/categories",{
                signal
            });
            return res.data;
        } catch (error) {
            return rejectWithValue(axiosErrorHandler(error));
        }
    }
);

export default actGetCategories;
