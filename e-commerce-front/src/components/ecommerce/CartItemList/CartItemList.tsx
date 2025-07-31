import type { TProducts } from "@customTypes/product"
import CartItem from "../CartItem/CartItem";


type CartItemListProps = {
    products: TProducts[],
    changeQuantityHandler: (id:number, quantity: number) => void,
    removeItemHandler: (id:number) => void,
}

// child - part 1 of removeItemHandler
const CartItemList = ({products,changeQuantityHandler,removeItemHandler}: CartItemListProps ) => {
    const renderList = products.map( (el) => 
            <CartItem 
                changeQuantityHandler={changeQuantityHandler}
                removeItemHandler={removeItemHandler}
                key={el.id} 
                {...el} />
    )
    return (
        <div>{renderList}</div>
    )
}

export default CartItemList