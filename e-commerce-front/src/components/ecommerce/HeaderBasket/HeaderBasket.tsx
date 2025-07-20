import { getCartTotalQuantitySelector } from '@store/cart/cartSlice';
import styles from './styles.module.css'
import { useAppSelector } from '@store/hooks'

const { basketContainer, basketQuantity , flexCenter} = styles

const HeaderBasket = () => {
    const cartItems = useAppSelector(getCartTotalQuantitySelector);
    
    // const totalQuantity = Object.values(cartItems).reduce((preValue,nextValue) => preValue+nextValue,0);
    // 0 as a initialValue
    
    return (
        <div className={basketContainer}>
            <img src="/src/assets/svg/cart.png" alt="basket icon" />
            <div className={`${basketQuantity} ${flexCenter}`}>{cartItems}</div>
        </div>
    )
}

export default HeaderBasket