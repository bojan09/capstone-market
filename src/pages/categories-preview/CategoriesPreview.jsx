import { useContext, Fragment } from "react";

// context
import { CategoriesContext } from "../../context/categories/categories.context.jsx";

// components
import { CategoryPreview } from "../../components/index.js";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
