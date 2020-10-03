import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Header = () => (
  <>
    <Link to="/play">New Game</Link>
    <Nav />
  </>
);

export default Header;
