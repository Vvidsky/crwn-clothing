import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";
// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

export default function CartIcon() {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  //   let countCartItems = cartItems.reduce(
  //     (count, item) => count + item.quantity,
  //     0
  //   );
  //   console.log(countCartItems);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}
