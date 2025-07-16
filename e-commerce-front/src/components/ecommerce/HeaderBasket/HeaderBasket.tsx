import styles from './styles.module.css'


const { basketContainer, basketQuantity , flexCenter} = styles

const HeaderBasket = () => {
    return (
        <div className={basketContainer}>
            <img src="/src/assets/svg/cart.png" alt="basket icon" />
            <div className={`${basketQuantity} ${flexCenter}`}>0</div>
        </div>
    )
}

export default HeaderBasket