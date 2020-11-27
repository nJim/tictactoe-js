import React from "react";
import { Link } from "react-router-dom";
import useToggle from "./useToggle";

const Nav = () => {
  const [menuState, toggleState] = useToggle();
  const handleToggle = () => toggleState();
  const menuClass = () => (menuState ? "open" : "");
  const animation = () => (menuState ? "fadeIn" : "fadeOut");
  return (
    <nav className="nav">
      <ul className={`nav__links ${animation()}`}>
        <li className="nav__link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__link">
          <Link to="/play">Play</Link>
        </li>
        <li className="nav__link">
          <Link to="/about">About</Link>
        </li>
        <li className="nav__link">
          <Link to="/users">Settings</Link>
        </li>
      </ul>
      <div onClick={handleToggle} id="nav-icon" className={menuClass()}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Nav;
