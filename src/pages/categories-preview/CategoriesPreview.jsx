import { Fragment } from "react";

// redux
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categorySelector.js";

// components
import { CategoryPreview } from "../../components/index.js";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
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
