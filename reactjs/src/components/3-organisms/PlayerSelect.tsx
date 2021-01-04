import React, { ReactChild } from "react";
import "./PlayerSelect.css";

const PlayerSelect = ({title, children}: Props) => {
  return (
    <fieldset className="player-select">
      <legend>{title}</legend>
      <div className="player-select__options">
        {children}
      </div>
    </fieldset>
  );
}

type Props = {
  title: string,
  children: ReactChild
}

export default PlayerSelect;
