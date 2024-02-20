import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./CartIcon.styles.jsx";
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
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon>
        <ShoppingCartIcon />
      </ShoppingIcon>
      <ItemCount as="span">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
