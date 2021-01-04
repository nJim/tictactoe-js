import React from "react";
import Box from "../2-molecules/Box";
import "./Board.css";

const Board = ({ handleClick, values }: Props) => (
  <div className="board">
    {[...Array(9).keys()].map((i) => (
      <Box key={i} id={i} handleClick={handleClick} value={values[i]} />
    ))}
  </div>
);

type Props = {
  handleClick: (arg0: number) => void,
  values: Array<string>,
}

export default Board;
