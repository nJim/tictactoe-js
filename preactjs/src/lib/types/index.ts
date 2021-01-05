import { Dispatch } from "react";

/**
 * App state object type.
 */
export type StateType = {
  icon1: string,
  icon2: string,
  turn: number,
  values: Array<any>,
  player: string,
  winner: string|undefined,
}

/**
 * App dispatcher object type.
 *
 * Each action type has a unique set of required props.
 */
export type ActionType =
  | { type: 'MOVE', boxId: number }
  | { type: 'SET_PLAYER_ICON', player: string, icon: string }
  | { type: 'CLEAR', error: string };

/**
 * App context object type.
 */
export type ContextType = {
  state: StateType,
  dispatch: Dispatch<any>,
}
