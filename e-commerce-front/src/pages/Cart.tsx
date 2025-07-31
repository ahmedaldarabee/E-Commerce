import { Heading } from "@components/common"
import { CartItemList, CartSubtotalPrice } from "@components/ecommerce"
import { Loading } from "@components/feedback";
import {actGetProductsByItems,cartItemChangeQuantity,cartItemRemove} from "@store/cart/cartSlice";

import { useAppDispatch, useAppSelector } from "@store/hooks"
import { useCallback, useEffect } from "react";

const Cart = () => {
    const dispatch = useAppDispatch();
    const { items,loading,error,productsFullInfo } = useAppSelector((state) => state.cartSlice);

    useEffect(() => {
        dispatch(actGetProductsByItems());
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

    return (
        <>
            <Heading>cart information</Heading>
            <Loading error={error} status={loading}>
                { products.length ?
                
                <>
                    <CartItemList
                    removeItemHandler={removeItemHandler}
                    changeQuantityHandler={changeQuantityHandler}
                    products={products}/>
                    
                    <CartSubtotalPrice products={products} />
                </>: ("There are no items")}
            </Loading>
        </>
    )
}

export default Cart