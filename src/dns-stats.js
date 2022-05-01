const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let array = domains
    .map((elem) => {
      return elem.split('.').reverse();
    })
    .flat()
    .sort();

  let objElement = [];
  let count = 1;
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      count++;
    } else {
      count--;
      objElement.push(array[i]);
      obj[`.${objElement.join('.')}`] = count + 1;
      count = 1;
    }
  }
  return obj;
}

module.exports = {
  getDNSStats,
};
