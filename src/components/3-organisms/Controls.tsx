import React from "react";
import ControlCount from "../2-molecules/ControlCount";
import ControlPlayer from "../2-molecules/ControlPlayer";
import ControlReset from "../2-molecules/ControlReset";
import "./Controls.css";

const Controls = ({player, handleClear, turn}: Props) => {
  return (
    <div className="controls">
      <ControlCount turn={turn}/>
      <ControlPlayer player={player}/>
      <ControlReset handleClear={handleClear}/>
    </div>
  );
}

type Props = {
  player: string,
  handleClear: () => void,
  turn: number
}

export default Controls;
