import React from "react";

const Box = ({ id, value, handleClick }) => (
  <div onClick={() => handleClick(id)} className="box">
    {value}
  </div>
);

export default Box;
