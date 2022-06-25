import React from "react";
import Button from "../button/button.component";
import './product-card.styles.scss'

import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { Footer, Name, Price, ProductCardContainer,Image } from './product-card.styles.jsx'

export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product)

  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType="inverted" onClick={addProductToCart}>Add to cart</Button>
    </ProductCardContainer>
  );
}
