import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  categoriesSlice from './categories/categoriesSlice' 
import productsSlice from './products/productsSlice'
import cartSlice from './cart/cartSlice'

import { persistReducer,PURGE,FLUSH,PAUSE,PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import persistStore from 'redux-persist/es/persistStore';

// storage: about web, but when you want to use local storage on mobile [ react-native ], you will use another word 
// whitelist: about add data into local storage, when you want to remove data you will use blacklist.
const cartPersistConfig = {
    key:"cart",
    storage,
    whitelist: ["items"]
}
// in this section [ "items" ] you define needed section from slice that you want to store it!

// combineReducers that main benefit is to implement configuration one time
const rootReducer = combineReducers({
    categoriesSlice,
    productsSlice,
    cartSlice: persistReducer(cartPersistConfig,cartSlice)
})

// when you want to see registration of categoriesSlice in tree [ in browser ] added in store
// to check if slice added successfully in the store, check

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [PURGE,FLUSH,PAUSE,PERSIST ],
            ignoredPaths: ['register'],
        },
    })
})

// define store and dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const persister = persistStore(store);
export { store , persister }