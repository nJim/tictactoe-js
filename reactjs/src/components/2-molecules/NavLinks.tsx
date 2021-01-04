import React from "react";
import NavLink from "../1-atoms/NavLink";
import "./NavLinks.css";

const NavLinks = ({init, menuState, handleClose}: Props) => {
  const animation = () => {
    if (init) return '';
    return menuState ? "fadeIn" : "fadeOut"
  }
  return (
    <ul className={`nav__links ${animation()}`} onClick={handleClose}>
      <NavLink url="/" label="Home" />
      <NavLink url="/play" label="Play" />
      <NavLink url="/about" label="About" />
      <NavLink url="/settings" label="Settings" />
    </ul>
  );
}

type Props = {
  init: boolean,
  menuState: boolean,
  handleClose: () => void
}

export default NavLinks;
