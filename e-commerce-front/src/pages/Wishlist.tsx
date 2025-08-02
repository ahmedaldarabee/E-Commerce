import { GridList, Heading } from "@components/common";
import { Loading } from "@components/feedback";
import type { TProducts } from "@customTypes/product";
import { Product } from "@components/ecommerce";
import useWishlist from "@hooks/useWishlist";

const Wishlist = () => {
    const { loading, error, records } = useWishlist();
    return (
        <>
        <Heading title={`your wishlist`} />
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