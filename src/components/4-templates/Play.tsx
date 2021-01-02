import React, { useState } from "react";
import Board from "../3-organisms/Board";
import Controls from "../3-organisms/Controls";
import { useAppContext } from "../../lib/hooks/useAppContext";

const Play = () => {
  // The state used for app-wide storage.
  const { state } = useAppContext();

  // Move values are stored in in a array.
  const initValues = Array(8).fill(null);
  const [values, setValues] = useState(initValues);

  // Track the current turn for the heck of it..
  const initTurn = 1;
  const [turn, setTurn] = useState(initTurn);

  // Chose one of the players to go first.
  const initPlayer = () =>
    [state.player1, state.player2][Math.floor(Math.random() * 2)];
  const [player, setPlayer] = useState(initPlayer);

  // Actions to take when a player clicks one of the boxes.
  const handleClick = (id: number) => {
    const updated = [...values];
    updated[id] = player;
    setValues(updated);
    setPlayer(player === state.player1 ? state.player2 : state.player1);
    setTurn(Math.min(turn + 1, 9));
  };

  // Actions to take when clicking the clear button.
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
