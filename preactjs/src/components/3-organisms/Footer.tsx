import { FunctionalComponent, h } from "preact";
import * as style from "./Footer.css";

const Footer: FunctionalComponent = () => (
  <div class={style.footer}>
    Preact project by&nbsp;
    <a className="funderline" href="http://www.jimvomero.com">Jim Vomero</a>
  </div>
);

export default Footer;
