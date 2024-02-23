import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import { store } from "./store/store.js";

import App from "./App";
import "./index.scss";

// context
import { CategoriesProvider } from "./context/categories/categories.context.jsx";
import { CartProvider } from "./context/cart/CartContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <CategoriesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategoriesProvider>
    </BrowserRouter>
  </Provider>
);
