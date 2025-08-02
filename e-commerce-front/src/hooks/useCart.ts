import {actGetProductsByItems, cleanCartProductsFullInfo, cartItemChangeQuantity,cartItemRemove} from "@store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { useCallback, useEffect } from "react";

const useCart = () => {
    const dispatch = useAppDispatch();
    const { items,loading,error,productsFullInfo } = useAppSelector((state) => state.cartSlice);

    useEffect(() => {
        const  promise = dispatch(actGetProductsByItems());
        return () => {
            dispatch(cleanCartProductsFullInfo());
            promise.abort();
        }
    },[dispatch]);

    const products = productsFullInfo.map((product) => ({
        ...product,
        quantity: items[product.id]
    }))
    
    const changeQuantityHandler = useCallback((id: number,quantity: number) => {
        dispatch(cartItemChangeQuantity({id,quantity}));
    },[dispatch]);

    // parent of removeItemHandler
    const removeItemHandler = useCallback((id:number) => {
        dispatch(cartItemRemove(id));
    },[dispatch]);

    return {loading,error,removeItemHandler,changeQuantityHandler,products}
}

export default useCart