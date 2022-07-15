import { createSelector } from "reselect";
import { RootState } from "../store";
import { CartItem } from './cart.types'

const selectCartReducer = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems: CartItem[]): number =>
  cartItems.reduce((count: number, item: CartItem) => count + item.quantity * item.price, 0)
);

export const selectCartCount = createSelector([selectCartItems], (cartItems): number =>
    cartItems.reduce((count: number, item: CartItem) => count + item.quantity, 0)
  // console.log(cartItems)
);
