const isWinner = (values: Array<string|null>, player: string) => {
  const stringify = stringifyBoard(values);
  const regex = getRegex(player);
  return regex.test(String(stringify));
}

export default isWinner;

const stringifyBoard = (values: Array<string|null>) => (
  values.reduce((accumulator, currentValue) => {
    const val = currentValue ? currentValue : '-';
    return accumulator + val;
  }, ''));

/**
 *
 *
 * @param p
 */
const getRegex = (p: string) => {
  const col = p + '\\S{2}' + p + '\\S{2}' + p;
  const row1 = '^' + p + p + p;
  const row2 = '^\\S{3}' + p + p + p;
  const row3 = '^\\S{6}' + p + p + p;
  const diag1 = p + '\\S{3}' + p + '\\S{3}' + p;
  const diag2 = '^\\S{2}' + p + '\\S{1}' + p + '\\S{1}' + p;
  const tests = [col, row1, row2, row3, diag1, diag2].join("|");
  return new RegExp(tests);
}
