import "./Home.scss";
// components
import { CategoryItem } from "../../components";

// data
import { categories } from "../../constants/categories";

const Home = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Home;
