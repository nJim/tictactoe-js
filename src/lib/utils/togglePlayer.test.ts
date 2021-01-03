import togglePlayer from "./togglePlayer";

describe("toggle players", () => {
  test("Player 2's turn after player 1.", () => {
    const state = {
      icon1: "X",
      icon2: "O",
      player: "X",
      turn: 1,
      values: []
    }
    expect(togglePlayer(state)).toEqual("O");
  });
  test("Player 1's turn after player 2.", () => {
    const state = {
      icon1: "X",
      icon2: "O",
      player: "O",
      turn: 1,
      values: []
    }
    expect(togglePlayer(state)).toEqual("X");
  });
});
