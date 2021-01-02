import React, { createContext, useReducer, Dispatch, } from "react";

export type StateType = {
  icon1: string,
  icon2: string,
  turn: number,
  values: Array<any>,
  player: string,
}

export type ContextType = {
  state: StateType,
  dispatch: Dispatch<any>
}

export const initialState = {
  icon1: 'X',
  icon2: 'O',
  turn: 1,
  values: Array(8).fill(""),
  player: 'X'
};

export const initialContext = {
  state: initialState,
  dispatch: (() => {return}),
}

const State = ({children}: any) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  )
};

export const Context = createContext<ContextType>(initialContext);

export default State;

const Reducer = (state: any, action: any) => {
switch (action.type) {
  case 'MOVE':
    return {
      ...state,
      turn: incTurn(state.turn),
      values: updateValues(action.boxId, state.player, state.values),
      player: togglePlayer(state),
    };
  case 'SET_PLAYER_ICON':
    return {
      ...state,
      [action.player]: action.icon
    };
  default:
    return state;
  }
};

const incTurn = (turn: number): number => Math.min(turn + 1, 9);

const togglePlayer = (state: StateType): string =>
  state.player === state.icon1 ? state.icon2 : state.icon1;

const updateValues = (boxId: any, player: any, values: any) => {
  const updated = [...values];
  updated[boxId] = player;
  return updated;
}
