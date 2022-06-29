
import CategoriesPreview from "../categories-preview/categories-preview.component";
import { Routes, Route } from 'react-router-dom';
import "./shop.styles.scss";
import Category from "../category/category.component";
import { useEffect } from "react";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from '../../store/categories/category.action'
import { useDispatch } from 'react-redux';

export default function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryArray = await getCategoriesAndDocuments('categories');
      console.log(categoryArray);
      dispatch(setCategories(categoryArray));
    };
    getCategoriesMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
