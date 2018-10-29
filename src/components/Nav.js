import React from "react";
import { Link } from "@reach/router";
import NavLink from "./NavLink";

const Nav = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          POSTERS
        </Link>
        <div className="nav">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
