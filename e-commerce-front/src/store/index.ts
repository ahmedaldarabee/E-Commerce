import { configureStore } from '@reduxjs/toolkit'
import  categoriesSlice from './categories/categoriesSlice' 
import productsSlice from './products/productsSlice'

// when you want to see registration of categoriesSlice in tree [ in browser ] added in store
export const store = configureStore({
    reducer: {
        categoriesSlice,
        productsSlice
    },
})


// define store and dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store