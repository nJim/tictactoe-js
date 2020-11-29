import React, { useState } from "react";
import NavIcon from "../1-atoms/NavIcon";
import NavLinks from "../2-molecules/NavLinks";
import Logo from "../2-molecules/Logo";
import useToggle from "../../useToggle";
import "./Nav.css";

const Nav = () => {
  const [init, setInit] = useState(true);
  const [menuState, toggleState] = useToggle();
  const handleClose = () => toggleState();
  const handleToggle = () => {
    setInit(false);
    toggleState();
  }

  return (
    <nav className="nav">
      <Logo />
      <NavLinks init={init} menuState={menuState} handleClose={handleClose} />
      <NavIcon menuState={menuState} handleToggle={handleToggle} />
    </nav>
  );
};

export default Nav;
