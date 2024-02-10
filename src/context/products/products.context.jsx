import { createContext, useState, useEffect } from "react";

// utilities
import { addCollectionAndDocuments } from "../../utility/firebase/firebase.js";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
