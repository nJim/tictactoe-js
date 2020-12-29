import isOutOfMoves from "./isOutOfMoves";

describe("Board is out of moves", () => {
  test("Out of moves", () => {
    const values = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
    expect(isOutOfMoves(values)).toBeTruthy();
  });
  test("At least 1 moves remains", () => {
    const values = [null, 'O', null, null, null, null, null, null, 'X'];
    expect(isOutOfMoves(values)).toBeFalsy();
  });
});
