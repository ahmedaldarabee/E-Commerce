import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = {
    id:number,
    title:string,
    prefix:string,
    img:string
}

// _ here the payload and un-used.
const actGetCategories = createAsyncThunk("categories/actGetCategories",async (_,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await axios.get<TResponse>("http://localhost:5005/categories");
        return res.data;

    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message);
        }
        return rejectWithValue("Un Expected Error!");
    }
})