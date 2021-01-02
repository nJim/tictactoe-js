import React from "react";
import RadioButton from "../2-molecules/RadioButton";
import Border from "../3-organisms/Border";
import PlayerSelect from "../3-organisms/PlayerSelect";
import {useAppContext} from "../../lib/hoc/State";

const SettingsPage = () => {
  // The state and dispatcher used for app-wide storage.
  const {state, dispatch} = useAppContext();

  // Update app state when changing player icons.
  const onChange = (e:any) => {
    dispatch({
      type: 'SET_PLAYER_ICON',
      player: e.currentTarget.name,
      icon: e.currentTarget.value
    });
  };

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
              onChange={onChange}
              checked={icon === state.player1}
            />
          ))}
        </PlayerSelect>
        <PlayerSelect title="Player Two">
          {icons.p2.map((icon, index) => (
            <RadioButton
              name="player2"
              key={`p2${index}`}
              id={`p2${index}`}
              value={icon}
              onChange={onChange}
              checked={icon === state.player2}
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
