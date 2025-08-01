import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {  actGetWishlist, productsFullInfoCleanUp,} from "@store/wishlist/wishlistSlice";

import { GridList, Heading } from "@components/common";
import { Loading } from "@components/feedback";
import type { TProducts } from "@customTypes/product";
import { Product } from "@components/ecommerce";

const Wishlist = () => {
    const dispatch = useAppDispatch();
    const { loading, error, productsFullInfo } = useAppSelector(
        (state) => state.wishlistSlice
    );
    const cartItems = useAppSelector((state) => state.cartSlice.items);

    useEffect(() => {
        dispatch(actGetWishlist());
        return () => {
            dispatch(productsFullInfoCleanUp())
        }
    }, [dispatch]);

    const records = productsFullInfo.map((el) => ({
        ...el,
        quantity: cartItems[el.id],
        isLiked: true,
    }));

    return (
        <>
        <Heading>Your Wishlist</Heading>
        <Loading status={loading} error={error}>
            <GridList<TProducts>
                records={records}
                renderItem={(record) => <Product {...record} />}
            />
        </Loading>
        </>
    );
};

export default Wishlist;