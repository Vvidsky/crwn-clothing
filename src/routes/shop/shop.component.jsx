
import CategoriesPreview from "../categories-preview/categories-preview.component";
import { Routes, Route } from 'react-router-dom';
import "./shop.styles.scss";
import Category from "../category/category.component";
import { useEffect } from "react";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from '../../store/categories/category.action'
import { useDispatch } from 'react-redux';

import { fetchCategoriesStartAsync } from "../../store/categories/category.action";

export default function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchCategoriesStartAsync());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
