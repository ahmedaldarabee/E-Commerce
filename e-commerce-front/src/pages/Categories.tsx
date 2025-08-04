import { Category } from "@components/ecommerce";
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";
import useCategories from "@hooks/useCategories";
import type { TCategories } from "@customTypes/category";

const Categories = () => {
    const {loading,error,records} = useCategories();
    return (
        <>
            <Heading title={`categories`} />
            <Loading status={loading} error={error} type="category">
                <GridList<TCategories>
                    emptyMessage="There are no categories"
                    records={records}
                    renderItem = {(record) => <Category {...record}/>}
                />
            </Loading>
        </>
    );
}

export default Categories