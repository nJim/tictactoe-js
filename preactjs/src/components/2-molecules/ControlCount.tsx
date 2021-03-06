import { FunctionalComponent, h } from "preact";
import * as style from "../3-organisms/Controls.css";

const ControlCount: FunctionalComponent<Props> = ({turn}: Props) =>
  <div class={style.controls__item}>
    <svg enable-background="new 0 0 512 512" version="1.1" viewBox="2 2 508 508" class={style.controls__icon}>
      <path fill="#2c3e50" d="m256 2c-140.3 0-254 113.7-254 254s113.7 254 254 254 254-113.7 254-254-113.7-254-254-254zm0 457.1c-112 0-203.1-91.1-203.1-203.1s91.1-203.1 203.1-203.1 203.1 91.1 203.1 203.1-91.1 203.1-203.1 203.1z"></path>
      <path fill="#2c3e50" d="m256 103.9c-14.1 0-25.5 11.4-25.5 25.5s11.4 25.5 25.5 25.5 25.5-11.4 25.5-25.5-11.4-25.5-25.5-25.5z"></path>
      <path fill="#2c3e50" d="m256 205.7c-14.1 0-25.5 11.4-25.5 25.5v152.8c0 14.1 11.4 25.5 25.5 25.5s25.5-11.4 25.5-25.5v-152.8c0-14.1-11.4-25.5-25.5-25.5z"></path>
    </svg>
    Turn: {turn}
  </div>;

type Props = {
  turn: number,
}

export default ControlCount;
