import { Container } from "react-bootstrap";
import { Category } from "@components/ecommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { Loading } from "@components/feedback";
import { GridList } from "@components/common";

const Categories = () => {
    const dispatch = useAppDispatch();
    // categoriesSlice it will accessed from store.
    const {loading , error, records} = useAppSelector((state) => state.categoriesSlice);
    
    useEffect(() => {
        // !records.length same idea of -> records.length === 0
        if(!records.length) dispatch(actGetCategories())
    },[dispatch,records]);

    return (
        <Container>
            <Loading status={loading} error={error}>
                <GridList
                    records={records}
                    renderItem = {(record) => <Category {...record}/>}
                />
            </Loading>
        </Container>
    );
}

export default Categories