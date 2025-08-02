import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { actGetProductsByCatPrefix, productsCleanUp } from "@store/products/productsSlice";

const useProducts = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const {error,loading,records} = useAppSelector((state) => state.productsSlice);
    const wishlistItemsId = useAppSelector((state) => state.wishlistSlice.itemsId);

    useEffect(() => {
        const promise = dispatch(actGetProductsByCatPrefix(params.prefix as string))
        return () => {
            dispatch(productsCleanUp());
            promise.abort(); // implementing abort controller
        }
    },[dispatch,params]);

    const paramsPrefix = params.prefix;
    // get data about cart
    const cartItem = useAppSelector((state) => state.cartSlice.items);
    const productsFullInfo = records.map((el) => ({
        ...el,
        quantity: cartItem[el.id] || 0,
        isLiked: wishlistItemsId.includes(el.id),
    }))

    return {error,loading,productsFullInfo,paramsPrefix}
}

export default useProducts