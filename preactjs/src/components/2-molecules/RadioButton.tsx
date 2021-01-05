import { FunctionalComponent, h } from "preact";
import * as style from "../3-organisms/PlayerSelect.css";

const RadioButton: FunctionalComponent<Props> = ({ id, value, name, checked, onChange }: Props) => (
  <div class={checked ? `${style.radiobutton} ${style.checked}` : style.radiobutton}>
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

//todo:fixme
type Props = {
  id: string,
  value: string,
  name: string,
  checked?: boolean,
  onChange?: any//EventHandler<any>
}

export default RadioButton;
