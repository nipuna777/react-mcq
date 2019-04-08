import React from "react";
import { NavLink } from "react-router-dom";

import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClass = "side-drawer";
  if (props.isOpen) {
    drawerClass = "side-drawer open";
  }

  return (
    <nav className={drawerClass}>
      <NavLink activeClassName="active" to="/" exact>
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/question">
        Questions
      </NavLink>
      <NavLink activeClassName="active" to="/about">
        About
      </NavLink>
      <NavLink activeClassName="active" to="/profile">
        Profile
      </NavLink>
    </nav>
  );
};

export default sideDrawer;
