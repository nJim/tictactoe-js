import React from "react";
import { ReactComponent as Icon } from '../../assets/icon-count.svg';

const ControlCount = ({turn}: Props) =>
  <div className="controls__item"><Icon />Turn: {turn}</div>;

type Props = {
  turn: number,
}

export default ControlCount;
