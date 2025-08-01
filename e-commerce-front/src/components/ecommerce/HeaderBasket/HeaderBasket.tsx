import { getCartTotalQuantitySelector } from '@store/cart/cartSlice';
import styles from './styles.module.css'
import { useAppSelector } from '@store/hooks'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { container, totalNum , flexCenter,pumpAnimate} = styles

const HeaderBasket = () => {
    const navigate = useNavigate();
  // cartItems that be as total quantity
    const cartItems = useAppSelector(getCartTotalQuantitySelector);
    const [isAnimated,setIsAnimated] = useState(false);

    const quantityStyle = `${totalNum} ${ isAnimated ? pumpAnimate : '' }`

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

    return (
        <div className={container} onClick={() => navigate("/cart")}>
            <img src="/src/assets/svg/cart.png" alt="basket icon" />
            {
                cartItems > 0 && (
                    <div className={`${quantityStyle} ${flexCenter}`}>{cartItems}</div>
                )
            }
        </div>
    )
}

export default HeaderBasket