import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { TProducts } from "@customTypes/product";
import {axiosErrorHandler} from "src/utils/index";


type TCategory = TProducts;
type TResponse = TCategory[];

const actGetProductsByCatPrefix = createAsyncThunk("products/actGetProductsByCatPrefix",async (prefix:string, thunkAPI) => {
        const { rejectWithValue, signal } = thunkAPI;

        try {
            const res = await axios.get<TResponse>(`/products?cat_prefix=${prefix}`,{
                signal
            });
            return res.data;
        } catch (error) {
            return rejectWithValue(axiosErrorHandler(error));
        }
    }
);

export default actGetProductsByCatPrefix;
