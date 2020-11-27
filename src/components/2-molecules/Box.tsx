import React from "react";

const Box = ({ id, value, handleClick }: Props) => (
  <div onClick={() => (value ? null : handleClick(id))} className="box">
    {value}
  </div>
);

type Props = {
  id: number,
  value: string,
  handleClick: (arg0: number) => void
}

export default Box;
