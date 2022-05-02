const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.separator) options.separator = '+';
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (options.addition === undefined) options.addition = '';
  if (!options.additionSeparator) options.additionSeparator = '|';
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if (typeof options.addition !== 'string') String(options.addition);

  return (
    `${str}` +
    `${options.addition}${options.additionSeparator}`.repeat(
      options.additionRepeatTimes
    ) +
    options.separator
  )
    .repeat(options.repeatTimes)
    .split(options.separator)
    .slice(0, options.repeatTimes)
    .map((element) =>
      element.slice(0, element.length - options.additionSeparator.length)
    )
    .join(options.separator);
}

module.exports = {
  repeater,
};
