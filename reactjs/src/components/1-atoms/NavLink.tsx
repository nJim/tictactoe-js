import React from "react";
import { Link } from "react-router-dom";
import "./NavLink.css";

const NavLink = ({url, label}: Props) => (
  <li className="nav__link">
    <Link to={url}>{label}</Link>
  </li>
);

type Props = {
  url: string,
  label: string
}

export default NavLink;
