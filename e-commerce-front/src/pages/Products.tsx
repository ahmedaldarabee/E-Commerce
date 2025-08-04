import { Product } from "@components/ecommerce";
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";
import type { TProducts } from "@customTypes/product";
import useProducts from "@hooks/useProducts";

const Products = () => {
    // productsFullInfo that have extra information not just main records
    const {paramsPrefix,loading,productsFullInfo,error} = useProducts();

    return (
        <> 
            <Heading title={`${paramsPrefix}`} >products page</Heading>
            <Loading status={loading} error={error} type="product">
                <GridList<TProducts>
                    emptyMessage="There are no products"
                    records={productsFullInfo}
                    renderItem={(record) => <Product {...record} />} />
            </Loading>
        </>
    );
};

export default Products;