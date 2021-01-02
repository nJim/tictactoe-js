import React, { createContext, useReducer, Dispatch, useContext } from "react";

export type StateType = {
  player1: string,
  player2: string
}

export type ContextType = {
  state: StateType,
  dispatch: Dispatch<any>
}

const initialState = {
  player1: 'X',
  player2: 'O'
};

let initialContext = {
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

export const useAppContext = () => useContext(Context);

const Reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SET_PLAYER_ICON':
          return {
            ...state,
            [action.player]: action.icon
          };
        default:
          return state;
    }
  };
