import Logo from '@assets/svg/cart.svg?react';
import styles from './styles.module.css'


const { basketContainer, basketQuantity , flexCenter} = styles

const HeaderBasket = () => {
    return (
        <div className={basketContainer}>
            <Logo title='basket icon'/>
            <div className={`${basketQuantity} ${flexCenter}`}>0</div>
        </div>
    )
}

export default HeaderBasket