import React, { EventHandler } from "react";
import RadioButton from "../2-molecules/RadioButton";

const RadioButtons = ({ name, icons, onChange, active }: Props) => (
  <>
    {icons.map((icon, index) => (
      <RadioButton
        name={name}
        key={`${name}${index}`}
        id={`${name}${index}`}
        value={icon}
        onChange={onChange}
        checked={icon === active}
      />
    ))}
  </>
);

type Props = {
  name: string,
  icons: Array<string>,
  active: string,
  onChange?: EventHandler<any>
}

export default RadioButtons;
