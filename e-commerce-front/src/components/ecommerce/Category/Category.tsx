import { Link } from "react-router-dom";
import styles from "./styles.module.css";
const { category, categoryImg, categoryTitle } = styles;
import type { TCategories } from "@customTypes/category";

const Category = ({title,img,prefix}:TCategories) => {
    return (
        <div className={category}>
            <Link to={`/categories/products/${prefix}`}>
                <div className={categoryImg}>
                    <img src={img} alt={title} />
                </div>
                <h4 className={categoryTitle}>{title}</h4>
            </Link>
        </div>
    );
};

export default Category;