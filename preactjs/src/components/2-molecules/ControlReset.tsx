import { FunctionalComponent, h } from "preact";
import { ReactComponent as Icon } from '../../assets/icon-refresh.svg';

const ControlReset: FunctionalComponent = ({handleClear}: Props) => (
  <div
    className="controls__item controls__reset"
    onClick={handleClear}
    tabIndex={0}
    role="link"
  >
    <Icon />Reset
  </div>
);

type Props = {
  handleClear: () => void,
}

export default ControlReset;
