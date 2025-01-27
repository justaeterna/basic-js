const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(bool = true) {
    this.bool = bool;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    const alph = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let keyValues = [];
    let messageValues = [];
    let streamValues = [];
    let encryptedMessage = [];
    let char = [];
    let sliceNum = [];

    function createValues(a, b) {
      a = a.toLowerCase();
      for (let i = 0; i < message.length; i++) {
        if (alph.includes(a[i])) {
          b.push(alph.indexOf(a[i]));
        } else if (a[i] !== undefined) {
          sliceNum.push(i);
          char.push(a[i].charCodeAt());
        }
      }
    }

    createValues(key, keyValues);
    createValues(message, messageValues);

    for (let i = 0; i < Math.floor(messageValues.length / keyValues.length); i++) {
      streamValues.push(...keyValues);
    }

    streamValues.push(
      ...keyValues.slice(0, messageValues.length % keyValues.length)
    );

    for (let i = 0; i < messageValues.length; i++) {
      encryptedMessage.push(alph[(messageValues[i] + streamValues[i]) % 26]);
    }

    for (let i = 0; i < sliceNum.length; i++) {
      encryptedMessage.splice(sliceNum[i], 0, String.fromCharCode(`${char[i]}`));
    }

    return this.bool === true || this.bool === undefined
      ? encryptedMessage.join('').toLocaleUpperCase()
      : encryptedMessage.reverse().join('').toLocaleUpperCase();
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    const alph = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let keyValues = [];
    let messageValues = [];
    let streamValues = [];
    let encryptedMessage = [];
    let char = [];
    let sliceNum = [];

    function createValues(a, b) {
      a = a.toLowerCase();
      for (let i = 0; i < message.length; i++) {
        if (alph.includes(a[i])) {
          b.push(alph.indexOf(a[i].toLowerCase()));
        } else if (a[i] !== undefined) {
          sliceNum.push(i);
          char.push(a[i].charCodeAt());
        }
      }
    }

    createValues(key, keyValues);
    createValues(message, messageValues);

    for (let i = 0; i < messageValues.length / keyValues.length; i++) {
      streamValues.push(...keyValues);
    }

    streamValues.push(
      ...keyValues.slice(0, messageValues.length % keyValues.length)
    );

    for (let i = 0; i < messageValues.length; i++) {
      if ((messageValues[i] - streamValues[i]) % 26 < 0) {
        encryptedMessage.push(alph[((messageValues[i] - streamValues[i]) % 26) + 26]);
      } else {
        encryptedMessage.push(alph[(messageValues[i] - streamValues[i]) % 26]);
      }
    }

    for (let i = 0; i < sliceNum.length; i++) {
      encryptedMessage.splice(sliceNum[i], 0, String.fromCharCode(`${char[i]}`));
    }

    return this.bool === true || this.bool === undefined
      ? encryptedMessage.join('').toLocaleUpperCase()
      : encryptedMessage.reverse().join('').toLocaleUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine,
};
