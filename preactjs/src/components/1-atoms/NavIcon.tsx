import { FunctionalComponent, h } from "preact";
import * as style from "./NavIcon.css";

const NavIcon: FunctionalComponent<Props> = ({menuState, handleToggle}: Props) => {
  const menuClass = () => (menuState ? style.open : "");
  return (
    <div className={`${style.nav__icon} ${menuClass()}`} onClick={handleToggle}>
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
