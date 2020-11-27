import React from "react";
import Box from "../2-molecules/Box";

const Grid = ({ handleClick, values }: Props) => (
  <div className="grid">
    {[...Array(9).keys()].map((i) => (
      <Box key={i} id={i} handleClick={handleClick} value={values[i]} />
    ))}
  </div>
);

type Props = {
  handleClick: (arg0: number) => void,
  values: Array<string>,
}

export default Grid;
