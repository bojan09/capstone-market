import "./Shop.scss";

import { useContext } from "react";

// context
import { ProductsContext } from "../../context/products/products.context";

// components
import { ProductCard } from "../../components";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
