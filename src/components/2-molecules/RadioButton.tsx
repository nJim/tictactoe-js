import React from "react";

const RadioButton = ({ id, value, name }: Props) => (
  <div className="radio-button">
    <input id={id} type="radio" value={value} name={name} />
    <label htmlFor={id}>{value}</label>
  </div>
);

type Props = {
  id: string,
  value: string,
  name: string,
}

export default RadioButton;
