import hasWinner from "./hasWinner";

describe("check things", () => {
  test("No winner with empty board", () => {
    const values = [
      null, null, null,
      null, null, null,
      null, null, null
    ];
    expect(hasWinner(values)).toBeFalsy();
  });
  test("No winner with empty spaces", () => {
    const values = [
      null, null, null,
      "X", null, null,
      "X", null, null
    ];
    expect(hasWinner(values)).toBeFalsy();
  });
  test("No winner with full card", () => {
    const values = [
      "O", "X", "O",
      "X", "O", "O",
      "X", "O", "X"
    ];
    expect(hasWinner(values)).toBeFalsy();
  });
  // test("big old test", () => {
  //   const values = [
  //     "O", "X", "X",
  //     "X", "X", "O",
  //     "O", "O", "X"
  //   ];
  //   expect(hasWinner(values)).toBeFalsy();
  // });
  test("Has winner in column", () => {
    const values = [
      "X", null, null,
      "X", null, null,
      "X", null, null
    ];
    expect(hasWinner(values)).toBeTruthy();
  });
  test("Has winner in row", () => {
    const values = [
      "X", "X", "X",
      null, null, null,
      null, null, null
    ];
    expect(hasWinner(values)).toBeTruthy();
  });
  test("Has winner in diagonal l2r", () => {
    const values = [
      "X", null, null,
      null, "X", null,
      null, null, "X"
    ];
    expect(hasWinner(values)).toBeTruthy();
  });
  test("Has winner in diagonal r2l", () => {
    const values = [
      null, null, "X",
      null, "X", null,
      "X", null, null
    ];
    expect(hasWinner(values)).toBeTruthy();
  });
});
