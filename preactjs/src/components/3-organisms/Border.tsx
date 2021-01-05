import { FunctionalComponent, h } from "preact";
import * as style from "./Border.css";

const Border: FunctionalComponent = ({ children }: Props) =>
  <div class={style.border}>{ children }</div>;

//@todo: fix props
type Props = {
  children?:
    | any
    | React.ReactChild[];
}

export default Border;
