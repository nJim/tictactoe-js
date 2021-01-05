import { FunctionalComponent, h } from "preact";
import { ReactComponent as Icon } from '../../assets/icon-count.svg';

const ControlCount: FunctionalComponent = ({turn}: Props) =>
  <div className="controls__item"><Icon />Turn: {turn}</div>;

type Props = {
  turn: number,
}

export default ControlCount;
