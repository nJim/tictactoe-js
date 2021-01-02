import React, { EventHandler } from "react";

const RadioButton = ({ id, value, name, checked, onChange }: Props) => (
  <div className={checked ? "radio-button checked" : "radio-button"}>
    <input
      id={id}
      type="radio"
      value={value}
      name={name}
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor={id}>{value}</label>
  </div>
);

type Props = {
  id: string,
  value: string,
  name: string,
  checked?: boolean,
  onChange?: EventHandler<any>
}

export default RadioButton;
