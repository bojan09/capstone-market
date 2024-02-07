import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.scss";

// context
import { UserProvider } from "./context/user/user.context";
import { ProductsProvider } from "./context/products/products.context.jsx";
import { CartProvider } from "./context/cart/CartContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </BrowserRouter>
);
