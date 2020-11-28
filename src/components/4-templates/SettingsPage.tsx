import React from "react";
import Border from "../3-organisms/Border";

const SettingsPage = () => (
  <Border>
    <div>
      <div className="form-item">
        <label>Player 1</label>
        <input type="text" value="X" />
      </div>
      <div className="form-item">
        <label>Player 2</label>
        <input type="text" value="O"/>
      </div>
    </div>
  </Border>
);

export default SettingsPage;
