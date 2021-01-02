import isWinner from "./isWinner";

const hasWinner = (values: Array<string|null>, players: Array<string>) =>
  players.find((player) => isWinner(values, player));

export default hasWinner;
