import React from "react";
import RadioButton from "../2-molecules/RadioButton";
import Border from "../3-organisms/Border";
import PlayerSelect from "../3-organisms/PlayerSelect";
import {useGameStateContext} from "../../lib/hoc/State";

const SettingsPage = () => {
  const {state} = useGameStateContext();
  console.log(state);
  return (
    <Border>
      <div>
        <PlayerSelect title="Player One">
          {icons.p1.map((icon, index) => (
            <RadioButton
              name="player1"
              key={`p1${index}`}
              id={`p1${index}`}
              value={icon}
            />
          ))}
        </PlayerSelect>
        <PlayerSelect title="Player Two">
          {icons.p2.map((icon, index) => (
            <RadioButton
              name="player1"
              key={`p2${index}`}
              id={`p2${index}`}
              value={icon}
            />
          ))}
        </PlayerSelect>
      </div>
    </Border>
  )
};

const icons = {
  p1: ["X", "☻", "♪", "♣", "◐", "🙂", "🥵", "🤘", "🦊", "🍕"],
  p2: ["O", "☺", "♬", "♠", "◑", "🙃", "🥶", "👊", "🐨", "🌮"]
};

export default SettingsPage;
