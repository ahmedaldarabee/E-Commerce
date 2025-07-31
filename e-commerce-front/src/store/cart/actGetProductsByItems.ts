import type { TProducts } from '@customTypes/product';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '@store/index';
import axios from "axios";

type TResponse = TProducts[];

const actGetProductsByItems = createAsyncThunk("cart/actGetProductsByItems", async (_,thunkAPI) => {
    const { rejectWithValue , getState,fulfillWithValue } = thunkAPI;
    const { cartSlice } = getState() as RootState;
    const itemsIds = Object.keys(cartSlice.items);
    
    if(!itemsIds.length) return fulfillWithValue([]);

    try {
        const concatenatedItemsId = itemsIds.map((id) => `id=${id}`).join('&');
        const res = await axios.get<TResponse>(`/products?${concatenatedItemsId}`);
        return res.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message);
        }else{
            return rejectWithValue("Sorry, An Unexpected Error!");
        }
    }
})

export default actGetProductsByItems