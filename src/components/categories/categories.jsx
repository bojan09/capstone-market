import "./categories.scss";
// components
import CategoryItem from "./category-item/CategoryItem";

// data
import { categories } from "../../constants/categories";

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
