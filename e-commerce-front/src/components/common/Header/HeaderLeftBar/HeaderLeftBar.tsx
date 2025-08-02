import { useAppSelector } from '@store/hooks';
import styles from './styles.module.css'
import { getCartTotalQuantitySelector } from '@store/cart/selectors';
import { HeaderCounter } from '../HeaderCounter/HeaderCounter';
import clsx from 'clsx';


const HeaderLeftBar = () => {
    const { flexCenter,gap10} = styles;
    const wishlistTotalQuantity = useAppSelector((state) => state.wishlistSlice.itemsId.length);
    const cartTotalQuantity = useAppSelector(getCartTotalQuantitySelector);

    return (
        <>
            <div className={clsx(flexCenter,gap10)}>
                <HeaderCounter 
                    imgSrc='/src/assets/svg/wishlist.png'
                    pageNavigate='wishlist'
                    totalQuantity={wishlistTotalQuantity} />
                
                <HeaderCounter 
                    imgSrc='/src/assets/svg/cart.png'
                    pageNavigate='cart'
                    totalQuantity={cartTotalQuantity} />
            </div>
        </>
    )
}

export default HeaderLeftBar