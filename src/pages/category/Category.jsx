import "./Category.jsx.scss";

import { useParams } from "react-router";
import { useContext, useState, useEffect } from "react";

// context
import { CategoriesContext } from "../../context/categories/categories.context";
import { ProductCard } from "../../components";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Category;
