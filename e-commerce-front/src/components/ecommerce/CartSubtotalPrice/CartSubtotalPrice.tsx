import type { TProducts } from '@customTypes/product'
import styles from './styles.module.css'

type CartSubtotalPriceProps = {
    products: TProducts[]
}

const CartSubtotalPrice = ({products}:CartSubtotalPriceProps) => {
    const subtotalPrice = products.reduce((accumulator,el)=> {
        const price = el.price;
        const quantity = el.quantity;

        if(quantity && typeof quantity === "number"){
            return accumulator + price * quantity;
        }else{
            return accumulator;
        }
    },0);
    return (
        <div className={styles.container}>
            <span>Subtotal: </span>
            <span>{subtotalPrice.toFixed(2)} JO</span>
        </div>
    )
}

export default CartSubtotalPrice