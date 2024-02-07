import "./CartItem.scss";
import React from "react";

const CartItem = ({ cartItems }) => {
  const { name, quantity } = cartItems;
  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
