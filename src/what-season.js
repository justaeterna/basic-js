const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (date instanceof Date === false || Object.getOwnPropertyNames(date).length)
    throw new Error('Invalid date!');

  let value = new Date(date).getMonth();

  switch (true) {
    case value == 11 || value <= 1:
      return 'winter';
    case value > 1 && value <= 4:
      return 'spring';
    case value > 4 && value <= 7:
      return 'summer';
    case value > 7 && value <= 11:
      return 'autumn';
  }
}

module.exports = {
  getSeason,
};
