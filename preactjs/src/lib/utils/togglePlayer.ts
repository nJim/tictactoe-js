import type { StateType } from "../types";

const togglePlayer = (state: StateType): string =>
  state.player === state.icon1 ? state.icon2 : state.icon1;

export default togglePlayer;
