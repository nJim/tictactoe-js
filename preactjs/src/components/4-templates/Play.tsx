import { FunctionalComponent, Fragment, h } from "preact";
import Board from "../3-organisms/Board";
import Controls from "../3-organisms/Controls";
import { useAppContext } from "../../lib/hooks/useAppContext";

const Play: FunctionalComponent = () => {
  // The state used for app-wide storage.
  const { state, dispatch } = useAppContext();

  // Actions to take when a player clicks one of the boxes.
  // Prevent click event if there is already a winner.
  const handleClick = (id: number) => {
    if (!state.winner) dispatch({type: 'MOVE', boxId: id});
  };

  // Actions to take when clicking the clear button.
  const handleClear = () => {
    dispatch({type: 'CLEAR'});
  };

  return (
    <Fragment>
      <Board handleClick={handleClick} values={state.values} />
      <Controls
        player={state.player}
        winner={state.winner}
        handleClear={handleClear}
        turn={state.turn}
      />
    </Fragment>
  );
};

export default Play;
