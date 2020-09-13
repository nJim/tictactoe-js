import React, { useState } from "react";
import Grid from "./Grid";

const Board = () => {
  const initValues = Array(9).fill(null);
  const initPlayer = () => ["X", "O"][Math.floor(Math.random() * 2)];

  const [values, setValues] = useState(initValues);
  const [currentPlayer, setPlayer] = useState(initPlayer);

  const handleClick = (id) => {
    const updated = [...values];
    updated[id] = currentPlayer;
    setValues(updated);
    setPlayer(currentPlayer == "X" ? "O" : "X");
  };

  const handleClear = () => {
    setValues(initValues);
    setPlayer(initPlayer);
  };

  return (
    <>
      <Grid handleClick={handleClick} values={values} />
      <button onClick={handleClear}>New Game</button>
      <div>Your move: {currentPlayer}</div>
    </>
  );
};

export default Board;
