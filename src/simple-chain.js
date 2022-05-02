const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  _chainArray: [],

  getLength() {
    return this._chainArray.length;
  },

  addLink(value) {
    this._chainArray = [...this._chainArray, `( ${value} )`];
    return this;
  },

  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position < 1 ||
      position > this._chainArray.length
    ) {
      this._chainArray.length = 0;
      throw new Error("You can't remove incorrect link!");
    }

    this._chainArray.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this._chainArray.reverse();
    return this;
  },

  finishChain() {
    let result = this._chainArray.join('~~');

    this._chainArray = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
