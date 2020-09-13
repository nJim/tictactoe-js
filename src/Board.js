import React, { useState } from "react";
import Box from "./Box";

const Board = () => {
  const [values, setValues] = useState(Array(9).fill(null));
  const [currentPlayer, setPlayer] = useState("X");

  const handleClick = (id) => {
    const updated = [...values];
    updated[id] = currentPlayer;
    setValues(updated);
    setPlayer(currentPlayer == "X" ? "O" : "X");
  };

  return (
    <div className="board">
      <Box key={0} id={0} handleClick={handleClick} value={values[0]} />
      <Box key={1} id={1} handleClick={handleClick} value={values[1]} />
      <Box key={2} id={2} handleClick={handleClick} value={values[2]} />
      <Box key={3} id={3} handleClick={handleClick} value={values[3]} />
      <Box key={4} id={4} handleClick={handleClick} value={values[4]} />
      <Box key={5} id={5} handleClick={handleClick} value={values[5]} />
      <Box key={6} id={6} handleClick={handleClick} value={values[6]} />
      <Box key={7} id={7} handleClick={handleClick} value={values[7]} />
      <Box key={8} id={8} handleClick={handleClick} value={values[8]} />
    </div>
  );
};

export default Board;
