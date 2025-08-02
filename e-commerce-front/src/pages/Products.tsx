import { Product } from "@components/ecommerce";
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";
import type { TProducts } from "@customTypes/product";
import useProducts from "@hooks/useProducts";

const Products = () => {
    const {paramsPrefix,loading,productsFullInfo,error} = useProducts();

    return (
        <> 
            <Heading title={`${paramsPrefix}`} >products page</Heading>
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