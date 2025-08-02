import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetWishlist, cleanWishlistFullInfoCleanUp} from "@store/wishlist/wishlistSlice";

const useWishlist = () => {
    const dispatch = useAppDispatch();
    const { loading, error, productsFullInfo } = useAppSelector(
        (state) => state.wishlistSlice
    );
    const cartItems = useAppSelector((state) => state.cartSlice.items);

    useEffect(() => {
        const promise = dispatch(actGetWishlist());
        return () => {
            dispatch(cleanWishlistFullInfoCleanUp());
            promise.abort();
        }
    }, [dispatch]);

    const records = productsFullInfo.map((el) => ({
        ...el,
        quantity: cartItems[el.id],
        isLiked: true,
    }));

    return { loading, error, records }
}

export default useWishlist