import { FunctionalComponent, h } from "preact";
import "./PlayerSelect.css";

const PlayerSelect: FunctionalComponent = ({title, children}: Props) => {
  return (
    <fieldset className="player-select">
      <legend>{title}</legend>
      <div className="player-select__options">
        {children}
      </div>
    </fieldset>
  );
}

//@todo:fixme
type Props = {
  title: string,
  children: any
}

export default PlayerSelect;
