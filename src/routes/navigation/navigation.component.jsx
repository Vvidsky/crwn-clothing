import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from '../../contexts/user.context';
import "./navigation.styles.scss";

export default function Navigation() {
  const currentUser = useContext(UserContext);
  console.log(currentUser);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/home'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/signin'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}
