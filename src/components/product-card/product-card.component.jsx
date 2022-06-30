import React from "react";
import Button from "../button/button.component";
import './product-card.styles.scss'

import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { Footer, Name, Price, ProductCardContainer,Image } from './product-card.styles.jsx'

import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

export default function ProductCard({ product }) {

  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;

  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

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
