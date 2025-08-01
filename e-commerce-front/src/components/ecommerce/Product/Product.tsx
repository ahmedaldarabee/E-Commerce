import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import type { TProducts } from "@customTypes/product";
import { addToCart } from '@store/cart/cartSlice';
import { memo, useEffect, useState } from "react";
import clsx from 'clsx';
import { actLikeToggle } from "@store/wishlist/wishlistSlice";
import { useAppDispatch } from "@store/hooks";
import Like from '@assets/svg/like.png'
import LikeFill from '@assets/svg/likedfilled.png'

const { product, productImg , wishlistBtn,flexCenter} = styles;

const Product = memo(({id,title,price,img,max,quantity,isLiked}: TProducts) => {
    const dispatch = useAppDispatch();
    const [isBtnDisabled,setIsBtnDisabled] = useState(false);

    const currentRemainingQuantity = max - (quantity ?? 0);
    const quantityReachToMax = currentRemainingQuantity <= 0 ? true : false;
    
    const [isloading,setIsLoading] = useState(false);

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

    const actLikeToggleHandler = () => {
        // to avoid more requests to the server when user doesn't click to wishlist!
        // where this section that be as a solution to bug!
        if(isloading) return;

        setIsLoading(true);
        dispatch(actLikeToggle(id)).unwrap().then(() => {
            setIsLoading(false);
        }).catch(() => {
            setIsLoading(false);
        })
    }

    return (
        <div className={product}>
            <div className={clsx(flexCenter, wishlistBtn)} onClick={actLikeToggleHandler}>
                {
                    isloading ? 
                        <Spinner animation="border" size="sm" variant="primary"/>
                    : isLiked ? 
                        <img src={LikeFill} alt="Like Image" /> :
                        <img src={Like} alt="Like fill Image" /> 
                }
            </div>

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