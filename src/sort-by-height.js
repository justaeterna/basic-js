const { NotImplementedError } = require('../extensions/index.js');

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
  let result = [];
  let counter = 0;
  let array = arr.filter((n) => n !== -1).sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    arr[i] === -1 ? result.push(-1) : (result.push(array[counter]), counter++);
  }

  return result;
}

module.exports = {
  sortByHeight,
};
