import "./Shop.scss";

import { useEffect } from "react";
import { Routes, Route } from "react-router";

// utilities
import { getCategoriesAndDocuments } from "../../utility/firebase/firebase.js";

// redux
import { useDispatch } from "react-redux";
import { setCategories } from "../../store/categories/categoryAction.js";

// pages
import CategoriesPreview from "../categories-preview/CategoriesPreview.jsx";
import Category from "../category/Category.jsx";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      console.log(categoriesArray);
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
