import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <>
    <div id="nav-icon">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Settings</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Nav;
