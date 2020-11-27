import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({url, label}) => (
  <li className="nav__link">
    <Link to={url}>{label}</Link>
  </li>
);

export default NavLink;
