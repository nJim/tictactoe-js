import { FunctionalComponent, h } from "preact";
import type { ComponentChildren } from "preact";
import "./PlayerSelect.css";
import * as style from "./PlayerSelect.css";

const PlayerSelect: FunctionalComponent<Props> = ({title, children}: Props) => {
  return (
    <fieldset class={style.playerselect}>
      <legend>{title}</legend>
      <div class={style.playerselect__options}>
        {children}
      </div>
    </fieldset>
  );
}

type Props = {
  title: string,
  children: ComponentChildren
}

export default PlayerSelect;
