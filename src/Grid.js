import React, { useState } from "react";
import Box from "./Box";

const Grid = ({ handleClick, values }) => (
  <div className="grid">
    {[...Array(9).keys()].map((i) => (
      <Box key={i} id={i} handleClick={handleClick} value={values[i]} />
    ))}
  </div>
);

export default Grid;
