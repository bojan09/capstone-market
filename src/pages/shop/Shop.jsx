import "./Shop.scss";

import { useContext, Fragment } from "react";

// context
import { CategoriesContext } from "../../context/categories/categories.context.jsx";

// components
import { CategoryPreview } from "../../components";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </div>
  );
};

export default Shop;
