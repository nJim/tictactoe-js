import updateValue from "./updateValue";

describe("update box values", () => {
  test("Value updates.", () => {
    const boxId = 0;
    const player = "X";
    const values = [
      "", "X", "O",
      "X", "", "",
      "", "O", "O"
    ];
    expect(updateValue(boxId, player, values)).toEqual([
      "X", "X", "O",
      "X", "", "",
      "", "O", "O"
    ]);
  });

});
