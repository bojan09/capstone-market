import "./CartDropdown.scss";

// components
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

const CartDropdown = () => (
  <div className="cart-dropdown-container">
    <div className="cart-items">
      {[].map((item) => (
        <CartItem cartItem={item} />
      ))}
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
);

export default CartDropdown;
