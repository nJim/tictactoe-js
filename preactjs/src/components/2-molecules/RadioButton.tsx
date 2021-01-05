import { FunctionalComponent, h } from "preact";

const RadioButton: FunctionalComponent = ({ id, value, name, checked, onChange }: Props) => (
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

//todo:fixme
type Props = {
  id: string,
  value: string,
  name: string,
  checked?: boolean,
  onChange?: any//EventHandler<any>
}

export default RadioButton;
