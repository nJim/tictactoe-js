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

export const useGameStateContext = () => {
    const state = useContext(Context);

    if (state === undefined) {
      throw new Error("must be used within a Provider");
    }

    return state;
  };

//   const useGameDispatchContext = () => {
//     const dispatch = useContext(DispatchContext);

//     if (dispatch === undefined) {
//       throw new Error("must be used within a Provider");
//     }

//     return dispatch;
//   };

//   export { useGameDispatchContext, useGameStateContext };


const Reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.payload
            };
      //   case 'ADD_POST':
      //       return {
      //           ...state,
      //           posts: state.posts.concat(action.payload)
      //       };
      //   case 'REMOVE_POST':
      //       return {
      //           ...state,
      //           posts: state.posts.filter(post => post.id !== action.payload)
      //       };
      //   case 'SET_ERROR':
      //       return {
      //           ...state,
      //           error: action.payload
      //       };
        default:
            return state;
    }
  };