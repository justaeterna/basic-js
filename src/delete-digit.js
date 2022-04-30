const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = String(n).split('');
  let res = [];

  for (let i = 0; i < array.length; i++) {
    if (
      +array[i] >= +array[i + 1] ||
      (+array[i] === +array[array.length - 1] &&
        res.length === array.length - 2)
    )
      res.push(+array[i]);
  }
  return +res.join('');
}

module.exports = {
  deleteDigit,
};
