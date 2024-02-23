import "./Category.scss";

import { useParams } from "react-router";
import { useState, useEffect, Fragment } from "react";

// redux
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categorySelector";

// context
import { ProductCard } from "../../components";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
