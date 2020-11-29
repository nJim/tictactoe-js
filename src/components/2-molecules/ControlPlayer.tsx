import React from "react";
import { ReactComponent as Icon } from '../../assets/icon-player.svg';

const ControlPlayer = ({player}: Props) => (
  <div className="controls__item">
    <Icon />Turn:
    <div className="controls__symbol">{player}</div>
  </div>
);

type Props = {
  player: string,
}

export default ControlPlayer;
