import { FunctionalComponent, h } from "preact";
import ControlCount from "../2-molecules/ControlCount";
import ControlPlayer from "../2-molecules/ControlPlayer";
import ControlReset from "../2-molecules/ControlReset";
import ControlWinner from "../2-molecules/ControlWinner";
import * as style from "./Controls.css";

const Controls: FunctionalComponent<Props> = ({player, winner, handleClear, turn}: Props) => {
  return (
    <div class={style.controls}>
      <ControlCount turn={turn}/>
      { winner
        ? <ControlWinner winner={winner}/>
        : <ControlPlayer player={player}/>
      }
      <ControlReset handleClear={handleClear}/>
    </div>
  );
}

type Props = {
  player: string,
  winner?: string|undefined,
  handleClear: () => void,
  turn: number
}

export default Controls;
