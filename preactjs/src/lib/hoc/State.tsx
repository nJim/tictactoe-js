import { h } from "preact";
import { useReducer } from 'preact/hooks';
import { createContext } from "preact-context";
import Reducer from "./Reducer";
import type { ContextType } from "../types";

// Initial app state.
export const initialState = {
  icon1: 'X',
  icon2: 'O',
  turn: 1,
  values: Array(8).fill(""),
  player: 'X',
  winner: undefined,
};

// Initial app context with empty dispatch.
export const initialContext = {
  state: initialState,
  dispatch: (() => {return}),
}

/**
 * The app context object used to init the provider and context hooks.
 */
export const Context = createContext<ContextType>(initialContext);

/**
 * Higher Order Component to provide state and dispatcher to the app.
 */
const State = ({children}: any) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  )
};

export default State;
