import { FunctionalComponent, h, Fragment } from "preact";
import RadioButton from "../2-molecules/RadioButton";

const RadioButtons: FunctionalComponent<Props> = ({ name, icons, onChange, active }: Props) => (
  <Fragment>
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
  </Fragment>
);
// @todo: Set event types for onChange handler.
type Props = {
  name: string,
  icons: Array<string>,
  active: string,
  onChange?: any
}

export default RadioButtons;
