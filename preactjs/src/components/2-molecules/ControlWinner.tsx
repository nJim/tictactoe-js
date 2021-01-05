import { FunctionalComponent, h } from "preact";
import * as style from "../3-organisms/Controls.css";

const ControlWinner: FunctionalComponent<Props> = ({winner}: Props) =>
  <div class={style.controls__item}>{winner} Wins!</div>;

type Props = {
  winner: string|undefined,
}

export default ControlWinner;
