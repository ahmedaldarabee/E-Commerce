import { Product } from "@components/ecommerce";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { actGetProductsByCatPrefix, productsCleanUp } from "@store/products/productsSlice";
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";
import type { TProducts } from "@customTypes/product";

const Products = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const {error,loading,records} = useAppSelector((state) => state.productsSlice);
    const wishlistItemsId = useAppSelector((state) => state.wishlistSlice.itemsId);

    useEffect(() => {
        dispatch(actGetProductsByCatPrefix(params.prefix as string))
        return () => {dispatch(productsCleanUp())}
    },[dispatch,params]);


    // get data about cart
    const cartItem = useAppSelector((state) => state.cartSlice.items);
    const productsFullInfo = records.map((el) => ({
        ...el,
        quantity: cartItem[el.id] || 0,
        isLiked: wishlistItemsId.includes(el.id),
    }))

    return (
        <> 
        <Heading> <span className="text-capitalize">{params.prefix}</span> products page</Heading>
            <Loading status={loading} error={error}>
                <GridList<TProducts>
                // productsFullInfo rather than normal records because that have new data.
                    records={productsFullInfo}
                    renderItem={(record) => <Product {...record} />} />
            </Loading>
        </>
    );
};

export default Products;