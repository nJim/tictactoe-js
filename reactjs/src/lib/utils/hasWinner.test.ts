import hasWinner from "./hasWinner";

describe("check things", () => {
  test("No winner with empty board", () => {
    const values = [
      null, null, null,
      null, null, null,
      null, null, null
    ];
    expect(hasWinner(values, ["X", "O"])).toBeUndefined();
  });
  test("No winner with full card", () => {
    const values = [
      "O", "X", "O",
      "X", "O", "O",
      "X", "O", "X"
    ];
    expect(hasWinner(values, ["X", "O"])).toBeUndefined();
  });
  test("Player 1 (poop) wins", () => {
    const values = [
      "💩", null, null,
      "💩", null, null,
      "💩", null, null
    ];
    expect(hasWinner(values, ["💩", "🌮"])).toEqual("💩");
  });
  test("Player 2 (taco) wins", () => {
    const values = [
      "💩", "💩", "🌮",
      "🌮", "🌮", "🌮",
      null, "💩", "💩"
    ];
    expect(hasWinner(values, ["💩", "🌮"])).toEqual("🌮");
  });
});
