const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let array = str.split('');
  let count = 1;
  let res = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      count++;
    } else if (array.length) {
      count--;
      res.push(count + 1);
      res.push(array[i]);
      count = 1;
    }
  }

  return res
    .filter((element) => {
      if (element !== 1) return element;
    })
    .join('');
}

module.exports = {
  encodeLine,
};
