import "./CartIcon.scss";
import { useContext } from "react";

// context
import { CartContext } from "../../context/cart/CartContext";

// svg
import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  const { cartCount } = useContext(CartContext);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
