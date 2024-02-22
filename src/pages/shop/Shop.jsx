import "./Shop.scss";

import { Routes, Route } from "react-router";

// context
import { CategoriesProvider } from "../../context/categories/categories.context.jsx";

// pages
import CategoriesPreview from "../categories-preview/CategoriesPreview.jsx";
import Category from "../category/Category.jsx";

const Shop = () => {
  return (
    <CategoriesProvider>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </CategoriesProvider>
  );
};

export default Shop;
