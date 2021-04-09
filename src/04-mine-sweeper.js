/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const mine = matrix;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === false) {
        mine[i][j] = 0;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        if (matrix[i][j + 1] === true) {
          mine[i][j]++;
        }
        if (matrix[i][j - 1] === true) {
          mine[i][j]++;
        }
        if (i !== 0 && matrix[i - 1][j] === true) {
          mine[i][j]++;
        }
        if (i !== matrix.length - 1 && matrix[i + 1][j] === true) {
          mine[i][j]++;
        }
        if (i !== 0 && matrix[i - 1][j - 1] === true) {
          mine[i][j]++;
        }
        if (i !== 0 && matrix[i - 1][j + 1] === true) {
          mine[i][j]++;
        }
        if (i !== matrix.length - 1 && matrix[i + 1][j - 1] === true) {
          mine[i][j]++;
        }
        if (i !== matrix.length - 1 && matrix[i + 1][j + 1] === true) {
          mine[i][j]++;
        }
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        mine[i][j] = 1;
      }
    }
  }

  return mine;
}

module.exports = minesweeper;
