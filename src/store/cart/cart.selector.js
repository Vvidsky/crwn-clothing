import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((count, item) => count + item.quantity * item.price, 0)
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce((count, item) => count + item.quantity, 0)
  // console.log(cartItems)
);
