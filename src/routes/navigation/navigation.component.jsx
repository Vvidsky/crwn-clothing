import React, { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles.jsx";
import "./navigation.styles.scss";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

export default function Navigation() {
  const currentUser = useSelector(selectCurrentUser);
  // const { currentUser } = useContext(UserContext);
  const isCartOpen = useSelector(selectIsCartOpen);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}
