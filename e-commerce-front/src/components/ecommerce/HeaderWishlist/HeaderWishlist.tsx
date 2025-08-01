import { useAppSelector } from '@store/hooks';
import styles from './styles.module.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { container, totalNum , flexCenter,pumpAnimate} = styles

const HeaderWishlist = () => {
    const navigate = useNavigate();
    // cartItems that be as total quantity
    const [isAnimated,setIsAnimated] = useState(false);
    const quantityStyle = `${totalNum} ${ isAnimated ? pumpAnimate : '' }`;

    const totalQuantity = useAppSelector((state) => state.wishlistSlice.itemsId);

    useEffect(() => {
        if(!totalQuantity) return;
        setIsAnimated(true);

        const debounce = setTimeout(() => {
            setIsAnimated(false);
        } , 300);

        return () => clearTimeout(debounce);
    },[totalQuantity])

    return (
        <div className={container} onClick={() => navigate("/wishlist")}>
            <img src="/src/assets/svg/wishlist.png" alt="wishlist icon" />

            {
                totalQuantity.length > 0 && (
                    <div className={`${quantityStyle} ${flexCenter}`}>{totalQuantity.length}</div>
                )
            }

        </div>
    )
}

export default HeaderWishlist