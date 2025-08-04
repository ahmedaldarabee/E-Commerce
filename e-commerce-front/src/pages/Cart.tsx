import { Heading } from "@components/common"
import { CartItemList, CartSubtotalPrice } from "@components/ecommerce"
import { Loading, LottieHandler } from "@components/feedback";
import useCart from "@hooks/useCart";

const Cart = () => {
    const {loading,error,removeItemHandler,changeQuantityHandler,products} = useCart();
    return (
        <>
            <Heading title="cart information's"/>
            <Loading error={error} status={loading} type="cart">
                { products.length ?
                
                <>
                    <CartItemList
                    removeItemHandler={removeItemHandler}
                    changeQuantityHandler={changeQuantityHandler}
                    products={products}/>
                    
                    <CartSubtotalPrice products={products} />
                </>: <LottieHandler type="empty" message="There are no items"/>}
            </Loading>
        </>
    )
}

export default Cart