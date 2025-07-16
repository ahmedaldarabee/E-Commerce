import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { TProducts } from "@customTypes/product";
type TCategory = TProducts;
type TResponse = TCategory[];

const actGetProductsByCatPrefix = createAsyncThunk("products/actGetProductsByCatPrefix",async (prefix:string, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;

        try {
            const res = await axios.get<TResponse>(`http://localhost:5005/products?cat_prefix=${prefix}`);
            return res.data;
        } catch (error) {
            if (axios.isAxiosError(error))
                return rejectWithValue(error.response?.data.message || error.message);

            return rejectWithValue("Un Expected Error!");
        }
    }
);

export default actGetProductsByCatPrefix;
