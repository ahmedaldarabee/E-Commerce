import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
const { product, productImg } = styles;

const Product = () => {
    return (
            <div className={product}>
                <div className={productImg}>
                    <img
                        src="https://img.sonofatailor.com/images/customizer/product/extra-heavy-cotton/ss/Black.jpg"
                        alt="product image" />
                </div>
                <h2>Title</h2>
                <h3>10 EGP</h3>
                <Button variant="info" style={{ color: "white" }}> Add to cart </Button>
            </div>
    );
};

export default Product;