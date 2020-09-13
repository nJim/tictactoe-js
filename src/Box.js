import React from "react";

const Box = ({ row, col }) => (
  <div className={`box row-${row} col-${col}`}>Cell</div>
);

export default Box;
