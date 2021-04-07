/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;

  for (let i = 0; i < matrix.length; i++) {
    const c = matrix[i];

    if (i === 0) {
      for (let j = 0; j < c.length; j++) {
        result += c[j];
      }
    } else {
      for (let j = 0; j < c.length; j++) {
        if (matrix[i - 1][j] !== 0) {
          result += c[j];
        }
      }
    }
  }
  return result;
}

module.exports = getMatrixElementsSum;
