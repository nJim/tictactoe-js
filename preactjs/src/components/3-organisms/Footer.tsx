import { FunctionalComponent, h } from "preact";
import * as style from "./Footer.css";
import * as global from "../0-base/global.css";

const Footer: FunctionalComponent = () => (
  <div class={style.footer}>
    Preact project by&nbsp;
    <a className={global.funderline} href="http://www.jimvomero.com">Jim Vomero</a>
  </div>
);

export default Footer;
