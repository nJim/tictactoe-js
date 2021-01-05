import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import * as style from "./NavLink.css";

const NavLink: FunctionalComponent<Props> = ({url, label}: Props) => (
  <li class={style.nav__link}>
    <Link href={url}>{label}</Link>
  </li>
);

type Props = {
  url: string,
  label: string
}

export default NavLink;
