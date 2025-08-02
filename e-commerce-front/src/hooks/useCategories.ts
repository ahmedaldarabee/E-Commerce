import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { actGetCategories, categoriesRecordsCleanUp } from "@store/categories/categoriesSlice";

const useCategories = () => {
    const dispatch = useAppDispatch();
    // categoriesSlice it will accessed from store.
    const {loading , error, records} = useAppSelector((state) => state.categoriesSlice);
    
    useEffect(() => {
    // !records.length same idea of -> records.length === 0
    const promise = dispatch(actGetCategories());

    return () => {
        dispatch(categoriesRecordsCleanUp());
        promise.abort();
    }
    },[dispatch]);

    return {loading , error, records}
}

export default useCategories