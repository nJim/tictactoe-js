import { updateValue, incTurn, togglePlayer } from "../utils";
import { initialState } from "./State";
import type { StateType, ActionType } from "../types";

/**
 * App Reducer.
 *
 * Specifies how the app's state changes in response to actions. Returns a
 * single value of the update app state store.
 *
 * @param {StateType} state The original app state store.
 * @param {ActionType} action Data to update app state.
 *
 * @return {StateType} The updated app state object.
 */
const Reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'MOVE':
      // ACTION: User clicks on the of the boxes.
      // Increment the turn counter by one.
      // Save the move to the values array.
      // Switch players to start the next turn.
      return {
        ...state,
        turn: incTurn(state.turn),
        values: updateValue(action.boxId, state.player, state.values),
        player: togglePlayer(state),
      };
    case 'SET_PLAYER_ICON':
      // ACTION: Set a player icon.
      // Set the new icon to player 1 or player 2.
      // Remove inprogress games since the symbols have changed.
      // Set the current player to be the last set icon.
      return {
        ...state,
        [action.player]: action.icon,
        values: Array(8).fill(""),
        player: action.icon,
      };
    case 'CLEAR':
      // ACTION: Clear and reset game.
      // Reset app state initial values.
      return initialState;
    default:
      return state;
  }
};

export default Reducer;
