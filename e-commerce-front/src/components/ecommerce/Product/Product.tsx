import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
const { product, productImg } = styles;
import type { TProducts } from "@customTypes/product";
import { addToCart } from '@store/cart/cartSlice';
import { useAppSelector } from "@store/hooks";

const Product = ({id,title,price,img}: TProducts) => {

    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addToCart(id));
    }

    return (
        <div className={product}>
            <div className={productImg}> <img src={img} alt={title} /> </div>
            <h2> {title} </h2>
            <h3>{price} JO</h3>
            <Button
                onClick={addToCartHandler}
                variant="info"
                style={{ color: "white" }}> Add to cart </Button>
        </div>
    );
};

export default Product;