import React from "react";
import NavIcon from "../1-atoms/NavIcon";
import NavLinks from "../2-molecules/NavLinks";
import useToggle from "../../useToggle";

const Nav = () => {
  const [menuState, toggleState] = useToggle();
  const handleToggle = () => toggleState();
  const handleClose = () => toggleState(0);
  return (
    <nav className="nav">
      <NavLinks menuState={menuState} handleClose={handleClose} />
      <NavIcon menuState={menuState} handleToggle={handleToggle} />
    </nav>
  );
};

export default Nav;
