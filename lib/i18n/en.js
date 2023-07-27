import BaseLanguage from '../classes/BaseLanguage.js';

/**
 * This class is for converting numbers to english words.
 */
export class English extends BaseLanguage {
  constructor(options) {
    options = Object.assign({
      negativeWord: 'minus',
      separatorWord: 'point',
      zero: 'zero'
    }, options);

    super(options, [
      [1000000000000000000000000000n, 'Octillion'],
      [1000000000000000000000000n, 'Septillion'],
      [1000000000000000000000n, 'Sextillion'],
      [1000000000000000000n, 'Quintillion'],
      [1000000000000000n, 'Quadrillion'],
      [1000000000000n, 'Trillion'],
      [1000000000n, 'Billion'],
      [1000000n, 'Million'],
      [1000n, 'Thousand'],
      [100n, 'Hundred'],
      [90n, 'Ninety'],
      [80n, 'Eighty'],
      [70n, 'Seventy'],
      [60n, 'Sixty'],
      [50n, 'Fifty'],
      [40n, 'Forty'],
      [30n, 'Thirty'],
      [20n, 'Twenty'],
      [19n, 'Nineteen'],
      [18n, 'Eighteen'],
      [17n, 'Seventeen'],
      [16n, 'Sixteen'],
      [15n, 'Fifteen'],
      [14n, 'Fourteen'],
      [13n, 'Thirteen'],
      [12n, 'Twelve'],
      [11n, 'Eleven'],
      [10n, 'Ten'],
      [9n, 'Nine'],
      [8n, 'Eight'],
      [7n, 'Seven'],
      [6n, 'Six'],
      [5n, 'Five'],
      [4n, 'Four'],
      [3n, 'Three'],
      [2n, 'Two'],
      [1n, 'One'],
      [0n, 'zero']
    ]);
  }

  /**
   * Merge word set pairs
   * @param {object} lPair {'one':1}
   * @param {object} rPair {'hundred':100}
   * @returns {object} {'one hundred': 100}
   */
  merge(lPair, rPair) {
    const lText = Object.keys(lPair)[0];
    const lNum = BigInt(Object.values(lPair)[0]);
    const rText = Object.keys(rPair)[0];
    const rNum = BigInt(Object.values(rPair)[0]);

    if (lNum == 1 && rNum < 100) return { [rText]: rNum };
    else if (100 > lNum && lNum > rNum) return { [`${lText}-${rText}`]: lNum + rNum };
    else if (lNum >= 100 && 100 > rNum) return { [`${lText} ${rText}`]: lNum + rNum };
    else if (rNum > lNum) return { [`${lText} ${rText}`]: lNum * rNum };

    return { [`${lText} ${rText}`]: lNum + rNum };
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
  return new English(options).floatToCardinal(value);
}
