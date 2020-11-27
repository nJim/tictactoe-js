import React from "react";

const NavIcon = ({menuState, handleToggle}: Props) => {
  const menuClass = () => (menuState ? "open" : "");
  return (
    <div className={`nav__icon ${menuClass()}`} onClick={handleToggle}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

type Props = {
  menuState: boolean,
  handleToggle: () => void
}

export default NavIcon;
