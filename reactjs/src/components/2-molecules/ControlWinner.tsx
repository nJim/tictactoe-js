import React from "react";

const ControlWinner = ({winner}: Props) =>
  <div className="controls__item">{winner} Wins!</div>;

type Props = {
  winner: string|undefined,
}

export default ControlWinner;
