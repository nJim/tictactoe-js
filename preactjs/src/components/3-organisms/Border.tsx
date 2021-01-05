import { FunctionalComponent, h } from "preact";
import type { ComponentChildren } from "preact";
import * as style from "./Border.css";

const Border: FunctionalComponent = ({ children }: Props) =>
  <div class={style.border}>{ children }</div>;

type Props = {
  children?:
    | ComponentChildren
    | ComponentChildren[];
}

export default Border;
