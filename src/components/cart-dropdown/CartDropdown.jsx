import {
  CartDropdownContainer,
  CartItems,
  CartButton,
} from "./CartDropdown.styles.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// components
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

// context
import { CartContext } from "../../context/cart/CartContext";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
