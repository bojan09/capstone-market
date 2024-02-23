import "./Shop.scss";

import { useEffect } from "react";
import { Routes, Route } from "react-router";

// utilities
import { getCategoriesAndDocuments } from "../../utility/firebase/firebase.js";

// redux
import { useDispatch } from "react-redux";
import { setCategoriesMap } from "../../store/categories/categoryAction.js";

// pages
import CategoriesPreview from "../categories-preview/CategoriesPreview.jsx";
import Category from "../category/Category.jsx";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      dispatch(setCategoriesMap(categoryMap));
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
