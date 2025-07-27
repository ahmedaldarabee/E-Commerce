import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";

import { useDispatch } from "react-redux";
const { product, productImg } = styles;

import type { TProducts } from "@customTypes/product";
import { addToCart } from '@store/cart/cartSlice';
import { memo, useEffect, useState } from "react";

const Product = memo(({id,title,price,img,max,quantity}: TProducts) => {
    const dispatch = useDispatch();
    const [isBtnDisabled,setIsBtnDisabled] = useState(false);

    const currentRemainingQuantity = max - (quantity ?? 0);
    const quantityReachToMax = currentRemainingQuantity <= 0 ? true : false;
    
    useEffect(()=> {
        if(!isBtnDisabled) return;

        setIsBtnDisabled(true);
        
        const debounce = setTimeout(() => {
            setIsBtnDisabled(false);
        },300);

        return () => clearTimeout(debounce);
    },[isBtnDisabled])

    const addToCartHandler = () => {
        dispatch(addToCart(id));
        setIsBtnDisabled(true);
    }

    return (
        <div className={product}>
            <div className={productImg}> <img src={img} alt={title} /> </div>
            <h2> {title} </h2>
            <h3>{price.toFixed(2)} JO</h3>
            <p>{quantityReachToMax ? "You reach to the limit" : `You can add ${currentRemainingQuantity} items`}</p>
            <Button disabled={isBtnDisabled || quantityReachToMax} onClick={addToCartHandler} variant="info" style={{ color: "white" }}>
                {isBtnDisabled ?
                    <> <Spinner animation="border" size="sm"/> adding... </> :
                ' Add to cart'}
            </Button>
        </div>
    );
});

export default Product;