import { SourceMap } from "module";
const isOutOfMoves = (values: Array<string|null>) =>
  !values.some(v => v === null);

export default isOutOfMoves;
