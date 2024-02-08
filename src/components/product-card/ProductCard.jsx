import "./ProductCard.scss";
import { useContext } from "react";

// components
import Button from "../button/Button";

// context
import { CartContext } from "../../context/cart/CartContext";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={addProductToCart} buttonType="inverted">
        Add to Card
      </Button>
    </div>
  );
};

export default ProductCard;
