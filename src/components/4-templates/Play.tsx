import React, { useState } from "react";
import Board from "../3-organisms/Board";
import Controls from "../3-organisms/Controls";
import isOutOfMoves from "../../lib/isOutOfMoves";

const Play = () => {
  const initValues = Array(8).fill(null);
  const initPlayer = () => ["X", "O"][Math.floor(Math.random() * 2)];
  const initTurn = 1;

  const [values, setValues] = useState(initValues);
  const [player, setPlayer] = useState(initPlayer);
  const [turn, setTurn] = useState(initTurn);

  const handleClick = (id: number) => {
    const updated = [...values];
    updated[id] = player;
    setValues(updated);
    setPlayer(player === "X" ? "O" : "X");
    setTurn(Math.min(turn + 1, 9));
    console.log(isOutOfMoves(values));
    console.log(values);
  };

  const handleClear = () => {
    setValues(initValues);
    setPlayer(initPlayer);
    setTurn(1);
  };

  return (
    <>
      <Board handleClick={handleClick} values={values} />
      <Controls
        player={player}
        handleClear={handleClear}
        turn={turn}
      />
    </>
  );
};

export default Play;
