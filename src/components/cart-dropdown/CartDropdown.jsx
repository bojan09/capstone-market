import "./CartDropdown.scss";
import { useContext } from "react";

// components
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

// context
import { CartContext } from "../../context/cart/CartContext";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
