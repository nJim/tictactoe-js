import { FunctionalComponent, h } from "preact";
import { useState } from 'preact/hooks';
import NavIcon from "../1-atoms/NavIcon";
import NavLinks from "../2-molecules/NavLinks";
import Logo from "../2-molecules/Logo";
import useToggle from "../../lib/hooks/useToggle";
import * as style from "./Nav.css";

const Nav: FunctionalComponent = () => {
  const [init, setInit] = useState(true);
  const [menuState, toggleState] = useToggle();
  const handleClose = () => toggleState();
  const handleToggle = () => {
    setInit(false);
    toggleState();
  }

  return (
    <nav class={style.nav}>
      <Logo />
      <NavLinks init={init} menuState={menuState} handleClose={handleClose} />
      <NavIcon menuState={menuState} handleToggle={handleToggle} />
    </nav>
  );
};

export default Nav;
