import React from "react";
import RadioButton from "../2-molecules/RadioButton";
import Border from "../3-organisms/Border";
import {useGameStateContext} from "../../lib/hoc/State";

const SettingsPage = () => {
  const {state} = useGameStateContext();
  return (
    <Border>
      <div>
        <fieldset>
          <legend>Player One</legend>
          <RadioButton name="player1" id="p1o01" value="X" />
          <RadioButton name="player1" id="p1o02" value="☻" />
          <RadioButton name="player1" id="p1o03" value="♪" />
          <RadioButton name="player1" id="p1o04" value="♣" />
          <RadioButton name="player1" id="p1o05" value="◐" />
          <RadioButton name="player1" id="p1o06" value="🙂" />
          <RadioButton name="player1" id="p1o07" value="🥵" />
          <RadioButton name="player1" id="p1o08" value="🤘" />
          <RadioButton name="player1" id="p1o09" value="🦊" />
          <RadioButton name="player1" id="p1o10" value="🍕" />
        </fieldset>
        <fieldset>
          <legend>Player Two</legend>
          <RadioButton name="player2" id="p2o01" value="O" />
          <RadioButton name="player2" id="p2o02" value="☺" />
          <RadioButton name="player2" id="p2o03" value="♬" />
          <RadioButton name="player2" id="p2o04" value="♠" />
          <RadioButton name="player2" id="p2o05" value="◑" />
          <RadioButton name="player2" id="p2o06" value="🙃" />
          <RadioButton name="player2" id="p2o07" value="🥶" />
          <RadioButton name="player2" id="p2o08" value="👊" />
          <RadioButton name="player2" id="p2o09" value="🐨" />
          <RadioButton name="player2" id="p2o10" value="🌮" />
        </fieldset>
        <div className="form-item">
          <label>Player 1</label>
          <input type="text" value={state.player1} />
        </div>
        <div className="form-item">
          <label>Player 2</label>
          <input type="text" value={state.player2}/>
        </div>
      </div>
    </Border>
  )
};

export default SettingsPage;
