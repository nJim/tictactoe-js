import { FunctionalComponent, h } from "preact";
import { ReactComponent as Icon } from '../../assets/icon-player.svg';

const ControlPlayer: FunctionalComponent = ({player}: Props) => (
  <div className="controls__item">
    <Icon />Turn:
    <div className="controls__symbol">{player}</div>
  </div>
);

type Props = {
  player: string,
}

export default ControlPlayer;
