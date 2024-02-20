import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./Navigation.styles";

import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

// assets
import { Logo } from "../../assets";

// components
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

// context
import { UserContext } from "../../context/user/user.context";
import { CartContext } from "../../context/cart/CartContext";

// utilites
import { signOutUser } from "../../utility/firebase/firebase";

const Navigation = () => {
  // context
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={Logo} alt="logo" className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
