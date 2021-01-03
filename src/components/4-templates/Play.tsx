import React from "react";
import Board from "../3-organisms/Board";
import Controls from "../3-organisms/Controls";
import { useAppContext } from "../../lib/hooks/useAppContext";

const Play = () => {
  // The state used for app-wide storage.
  const { state, dispatch } = useAppContext();

  // Actions to take when a player clicks one of the boxes.
  const handleClick = (id: number) => {
    dispatch({type: 'MOVE', boxId: id});
  };

  // Actions to take when clicking the clear button.
  const handleClear = () => {
    dispatch({type: 'CLEAR'});
  };

  return (
    <>
      <Board handleClick={handleClick} values={state.values} />
      <Controls
        player={state.player}
        handleClear={handleClear}
        turn={state.turn}
      />
    </>
  );
};

export default Play;
