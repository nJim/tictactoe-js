import React from "react";

const RadioButton = ({ id, value, name, checked }: Props) => (
    <label className="radio-button" htmlFor={id}>
      <input id={id} type="radio" value={value} name={name} checked={checked}/>
      {value}
    </label>
);

type Props = {
  id: string,
  value: string,
  name: string,
  checked?: boolean
}

export default RadioButton;
