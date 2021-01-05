import { FunctionalComponent, h } from "preact";
import NavLink from "../1-atoms/NavLink";
import * as style from "./NavLinks.css";

const NavLinks: FunctionalComponent<Props> = ({init, menuState, handleClose}: Props) => {
  const animation = () => {
    if (init) return '';
    return menuState ? style.fadeIn : style.fadeOut;
  }
  return (
    <ul className={`${style.nav__links} ${animation()}`} onClick={handleClose}>
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
