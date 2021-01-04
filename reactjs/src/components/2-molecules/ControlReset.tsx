import React from "react";
import { ReactComponent as Icon } from '../../assets/icon-refresh.svg';

const ControlReset = ({handleClear}: Props) => (
  <div
    className="controls__item controls__reset"
    onClick={handleClear}
    tabIndex={0}
    role="link"
  >
    <Icon />Reset
  </div>
);

type Props = {
  handleClear: () => void,
}

export default ControlReset;
