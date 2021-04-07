/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let posArr = [];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      posArr.push(arr[i]);
    }
  }

  posArr = posArr.sort((a, b) => a - b);

  for (let k = 0; k < arr.length; k++) {
    if (arr[k] === -1) {
      result.push(arr[k]);
    } else {
      result.push(posArr[0]);
      posArr.shift();
    }
  }

  return result;
}

module.exports = sortByHeight;
