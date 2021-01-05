import { FunctionalComponent, h } from "preact";
import * as style from "../3-organisms/Controls.css";

const ControlReset: FunctionalComponent<Props> = ({handleClear}: Props) => (
  <div
    class={`${style.controls__item} ${style.controls__reset}`}
    onClick={handleClear}
    tabIndex={0}
    role="link"
  >
    <svg version="1.1" viewBox="12.09 14 45.81 42" class={style.controls__icon}>
      <g transform="translate(0 -982.36)">
        <path fill="#2c3e50" overflow="visible" style="block-progression:tb;text-indent:0;text-transform:none" d="m33.155 996.36c-11.609 0-21.062 9.4217-21.062 21 0 11.578 9.4537 21 21.062 21 9.9357 0 18.297-6.8955 20.5-16.156a2.0002 2.0002 0 1 0-3.875-0.9375c-1.7806 7.4836-8.5367 13.094-16.625 13.094-9.455 0-17.062-7.5914-17.062-17 0-9.4087 7.6075-17 17.062-17 6.8242 0 12.667 3.9591 15.406 9.6875l-2.75-1.125a2.0002 2.0002 0 1 0-1.5 3.6875l6.625 2.6875a2.0002 2.0002 0 0 0 2.4062-0.75l4.2188-6.4688a2.0002 2.0002 0 0 0-1.7188-3.125 2.0002 2.0002 0 0 0-1.625 0.9375l-1.8438 2.8125c-3.3222-7.2776-10.704-12.344-19.219-12.344z"></path>
      </g>
    </svg>
    Reset
  </div>
);

type Props = {
  handleClear: () => void,
}

export default ControlReset;
