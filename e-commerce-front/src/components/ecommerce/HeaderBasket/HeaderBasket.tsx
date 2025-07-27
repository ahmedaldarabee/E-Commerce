import { getCartTotalQuantitySelector } from '@store/cart/cartSlice';
import styles from './styles.module.css'
import { useAppSelector } from '@store/hooks'
import { useEffect, useState } from 'react';

const { basketContainer, basketQuantity , flexCenter,pumpCartQuantity} = styles

const HeaderBasket = () => {
    // cartItems = totalQuantity
    const cartItems = useAppSelector(getCartTotalQuantitySelector);
    const [isAnimated,setIsAnimated] = useState(false);

    const quantityStyle = `${basketQuantity} ${ isAnimated ? pumpCartQuantity : '' }`

    useEffect(() => {
        // that mean we avoid enable this function when we don't have any data stored!

        if(!cartItems) return;

        setIsAnimated(true);

        // after 300 second stop the animation
        const debounce = setTimeout(() => {
            setIsAnimated(false);
        } , 300);

        return () => clearTimeout(debounce);
    },[cartItems])

    // const totalQuantity = Object.values(cartItems).reduce((preValue,nextValue) => preValue+nextValue,0);
    // 0 as a initialValue
    
    return (
        <div className={basketContainer}>
            <img src="/src/assets/svg/cart.png" alt="basket icon" />
            <div className={`${quantityStyle} ${flexCenter}`}>{cartItems}</div>
        </div>
    )
}

export default HeaderBasket