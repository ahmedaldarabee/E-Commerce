import type { TProducts } from '@customTypes/product';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '@store/index';
import {axiosErrorHandler} from 'src/utils/index';
import axios from "axios";

type TResponse = TProducts[];

const actGetProductsByItems = createAsyncThunk("cart/actGetProductsByItems", async (_,thunkAPI) => {
    const { rejectWithValue , getState,fulfillWithValue , signal} = thunkAPI;
    const { cartSlice } = getState() as RootState;
    const itemsIds = Object.keys(cartSlice.items);
    
    if(!itemsIds.length) return fulfillWithValue([]);

    try {
        const concatenatedItemsId = itemsIds.map((id) => `id=${id}`).join('&');
        const res = await axios.get<TResponse>(`/products?${concatenatedItemsId}`,{
            signal
        });
        return res.data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
})

export default actGetProductsByItems