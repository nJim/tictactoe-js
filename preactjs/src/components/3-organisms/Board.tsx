import { FunctionalComponent, h } from "preact";
import Box from "../2-molecules/Box";
import * as style from "./Board.css";

const Board: FunctionalComponent<Props> = ({ handleClick, values }: Props) => (
  <div class={style.board}>
    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
      <Box key={i} id={i} handleClick={handleClick} value={values[i]} />
    ))}
  </div>
);

type Props = {
  handleClick: (arg0: number) => void,
  values: Array<string>,
}

export default Board;
