import { Container } from "react-bootstrap";
import { Product } from "@components/ecommerce";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { actGetProductsByCatPrefix, productsCleanUp } from "@store/products/productsSlice";
import { Loading } from "@components/feedback";
import { GridList } from "@components/common";

const Products = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(actGetProductsByCatPrefix(params.prefix as string))
        return () => {dispatch(productsCleanUp())}
        
    },[dispatch,params]);

    const {error,loading,records} = useAppSelector((state) => state.productsSlice);

    return (
        <Container> 
            <Loading status={loading} error={error}>
                <GridList 
                    records={records}
                    renderItem={(record) => <Product {...record} />} />
            </Loading>
        </Container>
    );
};

export default Products;