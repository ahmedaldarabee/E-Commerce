import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@store/index";

// to be this function [ getCartTotalQuantity ] visible around multi section

// how createSelector work,
// once (state) => state.cart.items have a change it will entered into logic () => {...}
// but when it will not have a changes it will return last value that stored!

const getCartTotalQuantitySelector = createSelector((state:RootState) => state.cartSlice.items,(items) => {
    const totalQuantity = Object.values(items).reduce((preValue,nextValue) => {
        return preValue+nextValue
    },0);
    return totalQuantity;
})

export {getCartTotalQuantitySelector}