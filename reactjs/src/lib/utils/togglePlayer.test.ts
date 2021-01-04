import togglePlayer from "./togglePlayer";
import { initialState } from "../hoc/State";

describe("toggle players", () => {
  test("Player 2's turn after player 1.", () => {
    const state = {
      ...initialState,
      icon1: "X",
      icon2: "O",
      player: "X",
    }
    expect(togglePlayer(state)).toEqual("O");
  });
  test("Player 1's turn after player 2.", () => {
    const state = {
      ...initialState,
      icon1: "X",
      icon2: "O",
      player: "O",
    }
    expect(togglePlayer(state)).toEqual("X");
  });
});
