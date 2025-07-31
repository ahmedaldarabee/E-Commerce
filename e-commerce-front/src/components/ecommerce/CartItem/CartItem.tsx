import { Button, Form } from "react-bootstrap"
import styles from "./styles.module.css";
import type { TProducts } from "@customTypes/product";
import { memo } from "react";

const { cartItem, product, productImg, productInfo, cartItemSelection } =
styles;

type CartItemProps = TProducts & {
    changeQuantityHandler: (id:number, quantity: number) => void,
    removeItemHandler: (id:number) => void,
};

// sub childe - part 2 removeItemHandler
const CartItem = memo(({id,title,img,price,max,quantity,removeItemHandler,changeQuantityHandler}:CartItemProps) => {
    const renderOptions = Array(max)
    .fill(0).map((_,idx) => {
        const quantity = ++idx;
        return (
            <option value={quantity} key={quantity}>{quantity}</option>
        )
    })

    const changeQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const quantity = +event.target.value;
        changeQuantityHandler(id,quantity);
    }

    return (
        <div className={cartItem}>
            <div className={product}>
                <div className={productImg}>
                    <img src={img} alt={title} />
                </div>
                <div className={productInfo}>
                    <h2>{title}</h2>
                    <h3> <span>{price.toFixed(2)}</span> JO</h3>
                    <Button
                        variant="secondary"
                        style={{ color: "white", width: "100px" }}
                        className="mt-auto"
                        onClick={() => removeItemHandler(id)}
                    >
                    Remove
                    </Button>
                </div>
            </div>

            <div className={cartItemSelection}>
                <span className="d-block mb-1">Quantity</span>
                <Form.Select 
                    onChange={changeQuantity}
                    value={quantity}>
                    {renderOptions}
                </Form.Select>
            </div>
        </div>
    )
})

export default CartItem