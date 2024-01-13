import "./Navbar.scss";

import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

// assets
import { Logo } from "../../assets";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navbar;
