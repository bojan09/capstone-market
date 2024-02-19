import "./Shop.scss";

import { useContext, Fragment } from "react";

// context
import { CategoriesContext } from "../../context/categories/categories.context.jsx";

// components
import { ProductCard } from "../../components";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title.toUpperCase()}</h2>
          <div className="products-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
