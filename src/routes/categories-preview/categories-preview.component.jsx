import { Fragment } from "react";

import CategoryPreview from '../../components/category-preview/category-preview.component';
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useSelector } from 'react-redux';
export default function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <Fragment>
      <div className="categories-preview-container">
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} product={products} />
          );
        })}
      </div>
    </Fragment>
  );
}
