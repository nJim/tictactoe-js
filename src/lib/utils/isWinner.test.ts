import isWinner from "./isWinner";

describe("check things", () => {
  test("No winner with empty board", () => {
    const values = [
      null, null, null,
      null, null, null,
      null, null, null
    ];
    expect(isWinner(values, "X")).toBeFalsy();
  });
  test("No winner with empty spaces", () => {
    const values = [
      null, null, null,
      "X", null, null,
      "X", null, null
    ];
    expect(isWinner(values, "X")).toBeFalsy();
  });
  test("No winner with full card", () => {
    const values = [
      "O", "X", "O",
      "X", "O", "O",
      "X", "O", "X"
    ];
    expect(isWinner(values, "X")).toBeFalsy();
  });
  test("No winner with Xs breaking rows", () => {
    const values = [
      "O", "X", "X",
      "X", "X", "O",
      "O", "O", "X"
    ];
    expect(isWinner(values, "X")).toBeFalsy();
  });
  test("No winner from previous failed test case", () => {
    const values = [
      null, "X", "O",
      "X", "O", "X",
      null, "X", "O"
    ];
    expect(isWinner(values, "X")).toBeFalsy();
  });
  test("Has winner in column", () => {
    const values = [
      "X", null, null,
      "X", null, null,
      "X", null, null
    ];
    expect(isWinner(values, "X")).toBeTruthy();
  });
  test("Has winner in row", () => {
    const values = [
      null, null, null,
      "X", "X", "X",
      null, null, null
    ];
    expect(isWinner(values, "X")).toBeTruthy();
  });
  test("Has winner in diagonal l2r", () => {
    const values = [
      "X", null, null,
      null, "X", null,
      null, null, "X"
    ];
    expect(isWinner(values, "X")).toBeTruthy();
  });
  test("Has winner in diagonal r2l", () => {
    const values = [
      null, null, "X",
      null, "X", null,
      "X", null, null
    ];
    expect(isWinner(values, "X")).toBeTruthy();
  });
});
