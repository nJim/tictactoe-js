const hasWinner = (values: Array<string>) => {
  var stringify = stringifyBoard(values);
  const regex = getTests('X');
  return regex.test(String(stringify));
}

export default hasWinner;

const stringifyBoard = (values: Array<string>) =>
   values.reduce((accumulator, currentValue) => {
    let val = currentValue ? currentValue : '-';
    return accumulator + val;
  });

/**
 *
 *
 * @param p
 */
const getTests = (p: string) => {
  const col = p + '\\S{2}' + p + '\\S{2}' + p;
  const row = p + p + p;
  const diag1 = p + '\\S{3}' + p + '\\S{3}' + p;
  const diag2 = '\\S{2}' + p + '\\S{1}' + p + '\\S{1}' + p + '\\S{2}';
  const tests = [col, row, diag1, diag2].join("|");
  return new RegExp(tests);
}