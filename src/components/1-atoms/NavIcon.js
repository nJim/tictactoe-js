import React from "react";

const NavIcon = ({menuState, handleToggle}) => {
  const menuClass = () => (menuState ? "open" : "");
  return (
    <div className={`nav__icon ${menuClass()}`} onClick={handleToggle}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default NavIcon;
