import BaseLanguage from '../classes/BaseLanguage.js';

export class N2WordsAZ extends BaseLanguage {
  constructor(options) {
    options = Object.assign({
      negativeWord: 'mənfi',
      separatorWord: 'nöqtə',
      zero: 'sıfır'
    }, options);

    super(options, [
      [1000000000000000000n, 'kentilyon'],
      [1000000000000000n, 'katrilyon'],
      [1000000000000n, 'trilyon'],
      [1000000000n, 'milyar'],
      [1000000n, 'milyon'],
      [1000n, 'min'],
      [100n, 'yüz'],
      [90n, 'doxsan'],
      [80n, 'səksən'],
      [70n, 'yetmiş'],
      [60n, 'altmış'],
      [50n, 'əlli'],
      [40n, 'qırx'],
      [30n, 'otuz'],
      [20n, 'iyirmi'],
      [10n, 'on'],
      [9n, 'doqquz'],
      [8n, 'səkkiz'],
      [7n, 'yeddi'],
      [6n, 'altı'],
      [5n, 'beş'],
      [4n, 'dörd'],
      [3n, 'üç'],
      [2n, 'iki'],
      [1n, 'bir'],
      [0n, 'sıfır']
    ]);
  }

  merge(lPair, rPair) {
    const lText = Object.keys(lPair)[0];
    const rText = Object.keys(rPair)[0];
    const lNum = BigInt(Object.values(lPair)[0]);
    const rNum = BigInt(Object.values(rPair)[0]);

    if (lNum == 1 && (rNum <= 100 || rNum == 1000)) {
      return { [rText]: rNum };
    } else if (rNum > lNum) {
      return { [`${lText}${this.spaceSeparator}${rText}`]: lNum * rNum };
    } else {
      return { [`${lText}${this.spaceSeparator}${rText}`]: lNum + rNum };
    }
  }
}

/**
 * Converts a value to cardinal (written) form.
 * @param {number|string} value Number to be convert.
 * @param {object} [options] Options for class.
 * @throws {Error} Value cannot be invalid.
 * @returns {string} Value in cardinal (written) format.
 */
export default function (value, options = {}) {
  return new N2WordsAZ(options).floatToCardinal(value);
}
