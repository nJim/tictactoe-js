import { FunctionalComponent, h } from "preact";

const ControlWinner: FunctionalComponent = ({winner}: Props) =>
  <div className="controls__item">{winner} Wins!</div>;

type Props = {
  winner: string|undefined,
}

export default ControlWinner;
