import { FunctionalComponent, h } from "preact";
import RadioButton from "../2-molecules/RadioButton";

const RadioButtons: FunctionalComponent = ({ name, icons, onChange, active }: Props) => (
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
//@todo:fixme
type Props = {
  name: string,
  icons: Array<string>,
  active: string,
  onChange?: any//EventHandler<any>
}

export default RadioButtons;
