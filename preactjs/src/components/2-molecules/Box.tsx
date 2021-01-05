import { FunctionalComponent, h } from "preact";
import * as style from "./Box.css";

const Box: FunctionalComponent<Props> = ({ id, value, handleClick }: Props) => (
  <div onClick={() => (value ? null : handleClick(id))} class={style.box}>
    {value}
  </div>
);

type Props = {
  id: number,
  value: string,
  handleClick: (arg0: number) => void
}

export default Box;
