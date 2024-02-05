import "./Navbar.scss";

import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

// assets
import { Logo } from "../../assets";

// context
import { UserContext } from "../../context/user/user.context";

// utilites
import { signOutUser } from "../../utility/firebase/firebase";

const Navbar = () => {
  // context
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="authentication">
              SIGN IN
            </Link>
          )}
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navbar;
