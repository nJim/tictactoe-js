import { FunctionalComponent, h } from "preact";
import * as style from "../3-organisms/Controls.css";

const ControlPlayer: FunctionalComponent<Props> = ({player}: Props) => (
  <div class={style.controls__item}>
    <svg enable-background="new 0 0 512 512" version="1.1" viewBox="2 2 508 508" class={style.controls__icon}>
      <path fill="#2c3e50" d="m256 2c-140.3 0-254 113.7-254 254s113.7 254 254 254 254-113.7 254-254-113.7-254-254-254zm153.3 387v-10.7c0-6.3-4.3-11.8-10.4-13.4l-81.8-28.2c-6.1-1.6-10.4-7.1-10.4-13.4v-18.5c16.4 4 32.8 2.9 44.4 1 7.3-1.2 10.4-9.1 6.9-15.6-12.8-23.8-26.1-64.8-25.9-85 0.1-12.6-1.5-25.2-5.6-37.1-18.5-52.7-65-38.6-70.5-36.8-5.5-1.8-52.1-16-70.5 36.8-4.2 11.9-5.8 24.5-5.6 37.1 0.2 20.2-13.2 61.2-25.9 85-3.5 6.5-0.4 14.4 6.9 15.6 11.6 1.9 28.1 3 44.4-1v18.5c0 6.3-4.3 11.8-10.4 13.4l-80.9 28.1c-6.1 1.6-10.4 7.1-10.4 13.4v11.8c-31.5-35.8-50.8-82.6-50.8-134 0-112 91.2-203.2 203.2-203.2s203.2 91.2 203.2 203.2c0 50.8-18.9 97.3-49.9 133z"></path>
    </svg>
    Turn:
    <div className="controls__symbol">{player}</div>
  </div>
);

type Props = {
  player: string,
}

export default ControlPlayer;
