import "./Checkout.scss";
import { useContext } from "react";

// context
import { CartContext } from "../../context/cart/CartContext";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div>
      <h2>Checkout Page</h2>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <br />

              <button onClick={() => addItemToCart(cartItem)}>increment</button>

              <br />
              <br />

              <button onClick={() => removeItemFromCart(cartItem)}>
                decrement
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
