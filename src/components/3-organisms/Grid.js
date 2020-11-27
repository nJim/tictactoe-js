import React from "react";
import Box from "../2-molecules/Box";

const Grid = ({ handleClick, values }) => (
  <div className="grid">
    {[...Array(9).keys()].map((i) => (
      <Box key={i} id={i} handleClick={handleClick} value={values[i]} />
    ))}
  </div>
);

export default Grid;
