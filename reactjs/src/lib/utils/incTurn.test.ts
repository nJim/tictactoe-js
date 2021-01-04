import incTurn from "./incTurn";

describe("increment turns", () => {
  test("Turn increments by one.", () => {
    expect(incTurn(1)).toEqual(2);
  });
  test("Max turn of 9.", () => {
    expect(incTurn(12)).toEqual(9);
  });
});
