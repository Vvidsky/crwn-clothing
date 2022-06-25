import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from "./category-preview.styles.jsx";
// import { Link } from "react-router-dom";

export default function CategoryPreview({ title, product }) {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>
          {title.toUpperCase()}
        </Title>
      </h2>
      <Preview>
        {product
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
}
