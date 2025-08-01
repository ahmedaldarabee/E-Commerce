import type { TProducts } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = TProducts[];

// wishlist [ slice-name ] / actGetWishlist [action that exist in extra-reducer]
const actGetWishlist = createAsyncThunk("wishlist/actGetWishlist",async (_,thunkAPI)=>{
    const { rejectWithValue, fulfillWithValue } = thunkAPI;

    try {
        // to get all wishlist
        const userWishlist = await axios.get<{ productId: number }[]>
        (`/wishlist?userId=1`);

        if (!userWishlist.data.length) {
            return fulfillWithValue([]);
        }


        const concatenatedItemsId = userWishlist.data.
        map((el) => `id=${el.productId}`).join('&')

        const response = await axios.get<TResponse>(`/products?${concatenatedItemsId}`)
        return response.data;

    } catch (error) {
        if(axios.isAxiosError(error)){
            rejectWithValue(error.response?.data.message || error.message);
        }else{
            rejectWithValue("Un Expected Error - get wishlist page.");
        }
    }


})

export default actGetWishlist